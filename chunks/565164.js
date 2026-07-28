"use strict";
n.d(t, { B8: () => A, wb: () => h, xx: () => _, z5: () => E }), n(321073);
var i = n(477900),
    r = n(582128),
    a = n(61491),
    s = n(834730),
    l = n(584669),
    o = n(984212),
    d = n(491691);
let c = /#xywh=(\d+),(\d+),(\d+),(\d+)/i,
    u = [];
function _(e) {
    let t = e.match(c);
    if (null == t) return null;
    let n = e.split("#")[0];
    return 0 === n.length
        ? null
        : { imageUrl: n, x: parseInt(t[1], 10), y: parseInt(t[2], 10), w: parseInt(t[3], 10), h: parseInt(t[4], 10) };
}
function E(e, t, n, i) {
    let [a, s] = r.useState(null),
        [l, d] = r.useState(null);
    return (
        r.useEffect(() => {
            if (null == n || 0 === n.length || !e) return;
            let i = t.current;
            if (null != i)
                return (
                    (i.track.mode = "hidden"),
                    i.addEventListener("load", r),
                    i.readyState === HTMLTrackElement.LOADED && r(),
                    () => i.removeEventListener("load", r)
                );
            function r() {
                if (null == n || 0 === n.length || !e || null == i) return;
                let t = i.track.cues ?? [],
                    r = [];
                for (let e = 0; e < t.length; e++) {
                    let n = t[e];
                    if (!(0, o.C)(n)) continue;
                    let i = _(n.text);
                    null != i && r.push({ startSec: n.startTime, endSec: n.endTime, ...i });
                }
                r.sort((e, t) => e.startSec - t.startSec), s({ url: n, cues: r });
            }
        }, [n, t, e]),
        r.useEffect(() => {
            if (null == i || 0 === i.length || !e) return;
            let t = new Image();
            return (
                (t.onload = () => d(i)),
                (t.src = i),
                () => {
                    t.onload = null;
                }
            );
        }, [i, e]),
        null != a && a?.url === n && l === i ? a.cues : u
    );
}
function A(e, t) {
    if (0 === e.length) return null;
    let n = 0,
        i = e.length - 1;
    for (; n <= i; ) {
        let r = (n + i) >> 1,
            a = e[r];
        if (t < a.startSec) i = r - 1;
        else {
            if (!(t >= a.endSec)) return a;
            n = r + 1;
        }
    }
    return e[Math.max(0, Math.min(n, e.length - 1))];
}
function h(e) {
    let { cue: t, timeSec: n, cursorXPx: r, timelineWidthPx: o } = e;
    if (t.w <= 0 || t.h <= 0) return null;
    let c = t.w / 2,
        u = 8 + c,
        _ = Math.max(u, o - 8 - c),
        E = Math.max(u, Math.min(r, _));
    return (0, i.jsxs)("div", {
        className: d.kL,
        "aria-hidden": !0,
        style: { left: `${E}px`, bottom: "16px", width: `${t.w}px` },
        children: [
            (0, i.jsx)("div", { className: d.FF, style: (0, l.u)(t) }),
            (0, i.jsx)(s.E, {
                className: d.Sp,
                variant: "text-xs/normal",
                color: "text-overlay-light",
                tabularNumbers: !0,
                children: (0, a.rB)(n),
            }),
        ],
    });
}
