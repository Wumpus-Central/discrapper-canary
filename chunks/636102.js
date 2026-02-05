"use strict";
var r =
        (this && this.__createBinding) ||
        (Object.create
            ? function (e, t, n, r) {
                  void 0 === r && (r = n);
                  var i = Object.getOwnPropertyDescriptor(t, n);
                  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) &&
                      (i = {
                          enumerable: !0,
                          get: function () {
                              return t[n];
                          },
                      }),
                      Object.defineProperty(e, r, i);
              }
            : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
              }),
    i =
        (this && this.__exportStar) ||
        function (e, t) {
            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n);
        };
Object.defineProperty(t, "__esModule", { value: !0 }), (t.validateFileType = void 0);
let a = n(835986),
    s = n(817762);
function o(e) {
    return e.some((e) => "MP4" === e) ? ["M4V"] : e.some((e) => "AAC" === e) ? ["M4A"] : [];
}
i(n(524016), t),
    i(n(330821), t),
    i(n(549195), t),
    i(n(650624), t),
    i(n(212749), t),
    (t.validateFileType = function (e, t, n) {
        var r;
        let i = [];
        for (let e of [
            ...new Set(
                t.map((e) => {
                    let t = e.split(".").join("").toUpperCase();
                    return "7Z" === t ? `_${t}` : t;
                }),
            ),
        ]) {
            if (!Object.prototype.hasOwnProperty.call(a.FileTypes, e))
                throw TypeError(
                    `Type \`${e.toLowerCase()}\` is not supported. Please make sure that \`types\` list conatins only supported files`,
                );
            i.push(e);
        }
        if (
            n &&
            Object.prototype.hasOwnProperty.call(n, "chunkSize") &&
            (null != (r = null == n ? void 0 : n.chunkSize) ? r : 0) <= 0
        )
            throw RangeError("chunkSize must be bigger than zero");
        if (!n || !(null == n ? void 0 : n.excludeSimilarTypes)) {
            let e = o(i);
            e.length > 0 && (i = i.concat(e));
        }
        let l = [],
            u = [];
        for (let e of i) {
            let t = a.FileTypes.getSignaturesByName(e);
            (l = l.concat(t)),
                a.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK.includes(e.toLowerCase()) &&
                    u.push(a.FileTypes.getInfoByName(e));
        }
        let c = (0, s.getFileChunk)(e, (null == n ? void 0 : n.chunkSize) || 64),
            d = a.FileTypes.detectSignature(c, l);
        if (!d) return !1;
        if (u.length > 0) {
            let e = u.filter((e) => e.signatures.includes(d));
            if (e.length > 0) {
                let t = a.FileTypes.detectTypeByAdditionalCheck(c, e);
                return !!t && i.some((e) => e.toLowerCase() === t);
            }
        }
        return !0;
    });
