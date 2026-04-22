var n =
        (this && this.__createBinding) ||
        (Object.create
            ? function (e, t, i, n) {
                  void 0 === n && (n = i);
                  var r = Object.getOwnPropertyDescriptor(t, i);
                  (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) &&
                      (r = {
                          enumerable: !0,
                          get: function () {
                              return t[i];
                          },
                      }),
                      Object.defineProperty(e, n, r);
              }
            : function (e, t, i, n) {
                  void 0 === n && (n = i), (e[n] = t[i]);
              }),
    r =
        (this && this.__exportStar) ||
        function (e, t) {
            for (var i in e) "default" === i || Object.prototype.hasOwnProperty.call(t, i) || n(t, e, i);
        };
Object.defineProperty(t, "__esModule", { value: !0 }), (t.validateFileType = void 0);
let o = i(835986),
    a = i(817762);
r(i(524016), t),
    r(i(330821), t),
    r(i(549195), t),
    r(i(650624), t),
    r(i(212749), t),
    (t.validateFileType = function (e, t, i) {
        var n, r;
        let s = [];
        for (let e of [
            ...new Set(
                t.map((e) => {
                    let t = e.split(".").join("").toUpperCase();
                    return "7Z" === t ? `_${t}` : t;
                }),
            ),
        ]) {
            if (!Object.prototype.hasOwnProperty.call(o.FileTypes, e))
                throw TypeError(
                    `Type \`${e.toLowerCase()}\` is not supported. Please make sure that \`types\` list conatins only supported files`,
                );
            s.push(e);
        }
        if (
            i &&
            Object.prototype.hasOwnProperty.call(i, "chunkSize") &&
            (null != (n = null == i ? void 0 : i.chunkSize) ? n : 0) <= 0
        )
            throw RangeError("chunkSize must be bigger than zero");
        if (!i || !(null == i ? void 0 : i.excludeSimilarTypes)) {
            let e = (r = s).some((e) => "MP4" === e) ? ["M4V"] : r.some((e) => "AAC" === e) ? ["M4A"] : [];
            e.length > 0 && (s = s.concat(e));
        }
        let l = [],
            u = [];
        for (let e of s) {
            let t = o.FileTypes.getSignaturesByName(e);
            (l = l.concat(t)),
                o.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK.includes(e.toLowerCase()) &&
                    u.push(o.FileTypes.getInfoByName(e));
        }
        let c = (0, a.getFileChunk)(e, (null == i ? void 0 : i.chunkSize) || 64),
            d = o.FileTypes.detectSignature(c, l);
        if (!d) return !1;
        if (u.length > 0) {
            let e = u.filter((e) => e.signatures.includes(d));
            if (e.length > 0) {
                let t = o.FileTypes.detectTypeByAdditionalCheck(c, e);
                return !!t && s.some((e) => e.toLowerCase() === t);
            }
        }
        return !0;
    });
