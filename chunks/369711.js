r.d(n, {
    m: function () {
        return v;
    }
});
var i = r(951953);
var a = r(970173);
var o = r(520712);
var s = r(268111);
var l = r(941497);
var u = r(32026);
var c = r(480839);
var d = r(744285);
var f = r(492257);
var p = r(873817);
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let _ = new (r(259443).Yd)('RenderingContextWebGL'),
    m = '\nattribute vec4 position;\nattribute vec2 texcoord;\nuniform mat4 transform;\nvarying vec2 out_texcoord;\n\nvoid main() {\n   gl_Position = transform * position;\n   out_texcoord = texcoord;\n}\n',
    g = '\nprecision mediump float;\n\nvarying vec2 out_texcoord;\nuniform sampler2D texture;\n\nvoid main() {\n   gl_FragColor = texture2D(texture, out_texcoord);\n}\n';
class E {
    static create(e) {
        if (null == e) return null;
        let n = this.createShader(e, e.VERTEX_SHADER, m),
            r = this.createShader(e, e.FRAGMENT_SHADER, g);
        if (null == n || null == r) return null;
        let i = this.createProgram(e, n, r);
        if (null == i) return null;
        let a = e.getAttribLocation(i, 'position'),
            o = e.getAttribLocation(i, 'texcoord');
        if (-1 === a || -1 === o) return null;
        let s = e.getUniformLocation(i, 'transform'),
            l = e.getUniformLocation(i, 'texture');
        if (null == s || null == l) return null;
        let u = e.createBuffer();
        if (null == u) return null;
        e.bindBuffer(e.ARRAY_BUFFER, u), e.bufferData(e.ARRAY_BUFFER, new Float32Array([0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1]), e.STATIC_DRAW);
        let c = e.createTexture();
        return null == c
            ? null
            : new E({
                  gl: e,
                  program: i,
                  positionLoc: a,
                  texcoordLoc: o,
                  transformLoc: s,
                  textureLoc: l,
                  vertexBuffer: u,
                  texture: c
              });
    }
    static createShader(e, n, r) {
        let i = e.createShader(n);
        if (null == i) return null;
        if ((e.shaderSource(i, r), e.compileShader(i), !e.getShaderParameter(i, e.COMPILE_STATUS))) {
            _.warn('Failed to compile shader!');
            let n = e.getShaderInfoLog(i);
            return null != n && _.log(n), e.deleteShader(i), null;
        }
        return i;
    }
    static createProgram(e, n, r) {
        if (null == n || null == r) return null;
        let i = e.createProgram();
        if (null == i) return null;
        if ((e.attachShader(i, n), e.attachShader(i, r), e.linkProgram(i), !e.getProgramParameter(i, e.LINK_STATUS))) {
            _.warn('Failed to link program!');
            let n = e.getProgramInfoLog(i);
            return null != n && _.log(n), e.deleteProgram(i), null;
        }
        return i;
    }
    render(e) {
        if (null == e) return;
        let n = e.width,
            r = e.height,
            i = this.gl;
        i.bindTexture(i.TEXTURE_2D, this.texture), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, n, r, 0, i.RGBA, i.UNSIGNED_BYTE, e.data), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR), i.viewport(0, 0, n, r), i.clearColor(0, 0, 0, 1), i.clear(i.COLOR_BUFFER_BIT), i.useProgram(this.program), i.bindBuffer(i.ARRAY_BUFFER, this.vertexBuffer), i.enableVertexAttribArray(this.positionLoc), i.vertexAttribPointer(this.positionLoc, 2, i.FLOAT, !1, 0, 0), i.enableVertexAttribArray(this.texcoordLoc), i.vertexAttribPointer(this.texcoordLoc, 2, i.FLOAT, !1, 0, 0), i.uniformMatrix4fv(this.transformLoc, !1, this.transform), i.uniform1i(this.textureLoc, 0), i.drawArrays(i.TRIANGLES, 0, 6);
    }
    constructor({ gl: e, program: n, positionLoc: r, texcoordLoc: i, transformLoc: a, textureLoc: o, vertexBuffer: s, texture: l }) {
        h(this, 'transform', new Float32Array([2, 0, 0, 0, 0, -2, 0, 0, 0, 0, 1, 0, -1, 1, 0, 1])), h(this, 'gl', void 0), h(this, 'program', void 0), h(this, 'positionLoc', void 0), h(this, 'texcoordLoc', void 0), h(this, 'transformLoc', void 0), h(this, 'textureLoc', void 0), h(this, 'vertexBuffer', void 0), h(this, 'texture', void 0), (this.gl = e), (this.program = n), (this.positionLoc = r), (this.texcoordLoc = i), (this.transformLoc = a), (this.textureLoc = o), (this.vertexBuffer = s), (this.texture = l);
    }
}
function v(e) {
    let n = e.getContext('webgl2');
    return null == n ? null : E.create(n);
}
