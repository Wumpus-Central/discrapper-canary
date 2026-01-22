t.d(A, {
    R: () => s,
    Z: () => i,
}),
    t(65821);
var r = t(627968),
    n = t(64700),
    l = t(158363);
let a = n.createContext(void 0);
function i() {
    let e = n.useContext(a);
    if (null == e) throw Error("No GuildProductAttachmentManagerContextProvider found");
    return e;
}
function s(e) {
    let { children: A, guildId: t } = e,
        n = (function (e, A) {
            if (null == e) return {};
            var t,
                r,
                n,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (n = 0, t = Reflect.ownKeys(e); n < t.length; n++)
                    (r = t[n]),
                        !(A.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, A) {
                    if (null == e) return {};
                    var t,
                        r,
                        n = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (t = l[r]),
                            !(A.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
                    return n;
                })(e, A)),
                Object.getOwnPropertySymbols)
            )
                for (n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++)
                    (r = t[n]),
                        !(A.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, ["children", "guildId"]),
        i = (0, l.A)(t, n);
    return (0, r.jsx)(a.Provider, {
        value: i,
        children: A,
    });
}
