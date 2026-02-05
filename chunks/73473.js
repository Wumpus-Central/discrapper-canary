"use strict";
n.d(t, { R: () => f });
var r = n(64700),
    i = n(172218),
    a = n(323889),
    s = n(311907),
    o = n(475743),
    l = n(531685),
    u = n(266569),
    c = n(971649);
n(23766);
let d = (e) => {
        let [t, n] = r.useState(!1),
            a = e ?? t,
            s = a !== (0, o.A)(a);
        return { visible: a, visibleChanged: s, reference: (0, i.K)((e) => n(e), 0.5) };
    },
    _ = () => {
        let e = (0, s.bG)([l.A], () => l.A.isFocused()),
            t = (0, o.A)(e),
            n = e !== t;
        return { focused: e, focusedChanged: n };
    },
    f = r.memo(function (e) {
        let { focused: t, focusedChanged: n } = _(),
            { visible: i, visibleChanged: s, reference: o } = d(e.overrideVisibility),
            { key: l, adContentIds: f } = (0, c.RC)(e),
            p = { ...e, focused: t, focusedChanged: n, visible: i, visibleChanged: s, reference: o };
        return "questOrQuests" in e
            ? (0, r.createElement)(u.xs, { ...p, key: l, adContentIds: f, adCreativeType: a.p.QUEST })
            : (0, r.createElement)(u.xs, { ...p, key: l, adContentIds: f, adCreativeType: e.adCreativeType });
    });
