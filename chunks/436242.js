n.d(t, { z: () => s });
let r = new Set(["id"]),
    i = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
    a = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
    o = /^(data-.*)$/;
function s(e, t = {}) {
    let { labelable: n, isLink: l, propNames: c } = t,
        u = {};
    for (let t in e)
        Object.prototype.hasOwnProperty.call(e, t) &&
            (r.has(t) || (n && i.has(t)) || (l && a.has(t)) || (null == c ? void 0 : c.has(t)) || o.test(t)) &&
            (u[t] = e[t]);
    return u;
}
