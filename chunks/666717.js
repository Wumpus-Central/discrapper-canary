n.d(t, {
    PA: () => p,
    RT: () => f,
    _t: () => d,
    av: () => u,
    iV: () => c,
    yO: () => b,
});
var l = n(440745),
    r = n.n(l),
    i = n(317097),
    a = n(654107),
    s = n(287809),
    o = n(134753);

function c(e) {
    let t = e.current,
        n = null == t ? void 0 : t.getContext("2d");
    null != t && null != n && n.clearRect(0, 0, t.width, t.height);
}

function u(e, t) {
    let { width: n, height: l, left: r, top: i } = e.getBoundingClientRect();
    return {
        x: (t.clientX - r) / n,
        y: (t.clientY - i) / l,
    };
}

function d(e, t) {
    return Math.round(e * t * window.devicePixelRatio);
}

function f(e, t, n) {
    return {
        x: d(e.x, t),
        y: d(e.y, n),
        deltaTime: e.deltaTime,
    };
}

function p(e) {
    return e.type === o.Z.LINE;
}

function b(e, t, n, l) {
    var o;
    let c = s.default.getUser(e),
        u = null == c ? void 0 : c.getAvatarURL(null, 80),
        d = null != u ? (null == (o = a.Ip.getState().palette[u]) ? void 0 : o[0]) : null,
        f =
            null != d
                ? "#".concat(
                      r()({
                          r: d[0],
                          g: d[1],
                          b: d[2],
                      }).toHex(),
                  )
                : l,
        p = (0, i.OK)((0, i.LX)(f)) > 0.5 ? n : t;
    return {
        fillColor: f,
        outlineColor: p,
    };
}
n(824217);
