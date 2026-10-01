(n.d(t, { B8: () => p, wb: () => h, xx: () => m, z5: () => f }), n(321073));
var r = n(477900),
    l = n(582128),
    a = n(61491),
    i = n(834730),
    u = n(584669),
    o = n(984212),
    s = n(42388);
let c = /#xywh=(\d+),(\d+),(\d+),(\d+)/i,
    d = [];
function m(e) {
    let t = e.match(c);
    if (null == t) return null;
    let n = e.split("#")[0];
    return 0 === n.length
        ? null
        : { imageUrl: n, x: parseInt(t[1], 10), y: parseInt(t[2], 10), w: parseInt(t[3], 10), h: parseInt(t[4], 10) };
}
function f(e, t, n, r) {
    let [a, i] = l.useState(null),
        [u, s] = l.useState(null);
    return (
        l.useEffect(() => {
            if (null == n || 0 === n.length || !e) return;
            let r = t.current;
            if (null != r)
                return (
                    (r.track.mode = "hidden"),
                    r.addEventListener("load", l),
                    r.readyState === HTMLTrackElement.LOADED && l(),
                    () => r.removeEventListener("load", l)
                );
            function l() {
                if (null == n || 0 === n.length || !e || null == r) return;
                let t = r.track.cues ?? [],
                    l = [];
                for (let e = 0; e < t.length; e++) {
                    let n = t[e];
                    if (!(0, o.C)(n)) continue;
                    let r = m(n.text);
                    null != r && l.push({ startSec: n.startTime, endSec: n.endTime, ...r });
                }
                (l.sort((e, t) => e.startSec - t.startSec), i({ url: n, cues: l }));
            }
        }, [n, t, e]),
        l.useEffect(() => {
            if (null == r || 0 === r.length || !e) return;
            let t = new Image();
            return (
                (t.onload = () => s(r)),
                (t.src = r),
                () => {
                    t.onload = null;
                }
            );
        }, [r, e]),
        null != a && a?.url === n && u === r ? a.cues : d
    );
}
function p(e, t) {
    if (0 === e.length) return null;
    let n = 0,
        r = e.length - 1;
    for (; n <= r;) {
        let l = (n + r) >> 1,
            a = e[l];
        if (t < a.startSec) r = l - 1;
        else {
            if (!(t >= a.endSec)) return a;
            n = l + 1;
        }
    }
    return e[Math.max(0, Math.min(n, e.length - 1))];
}
function h(e) {
    let { cue: t, timeSec: n, cursorXPx: l, timelineWidthPx: o } = e;
    if (t.w <= 0 || t.h <= 0) return null;
    let c = t.w / 2,
        d = 8 + c,
        m = Math.max(d, o - 8 - c),
        f = Math.max(d, Math.min(l, m));
    return (0, r.jsxs)("div", {
        className: s.kL,
        "aria-hidden": !0,
        style: { left: `${f}px`, bottom: "16px", width: `${t.w}px` },
        children: [
            (0, r.jsx)("div", { className: s.FF, style: (0, u.u)(t) }),
            (0, r.jsx)(i.E, {
                className: s.Sp,
                variant: "text-xs/normal",
                color: "text-overlay-light",
                tabularNumbers: !0,
                children: (0, a.rB)(n),
            }),
        ],
    });
}
