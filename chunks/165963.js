var r = n(582128),
    l = n(506774);
let a = "conjureTipDismissals",
    i = new Set(),
    u = new Set(),
    o = 0;
function s() {
    let e = l.w.get(a);
    return { forever: e?.forever ?? [], app: e?.app ?? {}, anchor: e?.anchor ?? {} };
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var r;
            return i.has(((r = e.id), `${t}:${r}`));
        case "anchor":
            return null != n && s().anchor[t]?.[e.id] === n;
        case "app":
            return s().app[t]?.includes(e.id) === !0;
        case "forever":
            return s().forever.includes(e.id);
    }
}
function d(e) {
    return (u.add(e), () => u.delete(e));
}
n.d(
    t,
    {},
    {
        $p: function () {
            return r.useSyncExternalStore(d, () => o);
        },
        VS: c,
        qv: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (null == e.dismissal || c(e, t, n)) return;
            let r = s();
            switch (e.dismissal) {
                case "session":
                    var d;
                    i.add(((d = e.id), `${t}:${d}`));
                    break;
                case "anchor":
                    if (null == n) return;
                    l.w.set(a, { ...r, anchor: { ...r.anchor, [t]: { ...r.anchor[t], [e.id]: n } } });
                    break;
                case "app":
                    l.w.set(a, { ...r, app: { ...r.app, [t]: [...(r.app[t] ?? []), e.id] } });
                    break;
                case "forever":
                    l.w.set(a, { ...r, forever: [...r.forever, e.id] });
            }
            (o++, u.forEach((e) => e()));
        },
    },
);
