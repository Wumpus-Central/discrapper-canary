n.d(t, { B8: () => m, wb: () => f, z5: () => d }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(61491),
    i = n(834730),
    s = n(984212),
    u = n(875699);
let o = /#xywh=(\d+),(\d+),(\d+),(\d+)/i,
    c = [];
function d(e, t, n, r) {
    let [a, i] = l.useState(null),
        [u, d] = l.useState(null);
    return (
        l.useEffect(() => {
            if (null == n || 0 === n.length || !e) return;
            let r = t.current;
            if (null == r) return;
            r.track.mode = "hidden";
            let l = () => {
                let e = r.track.cues ?? [],
                    t = [];
                for (let n = 0; n < e.length; n++) {
                    let r = e[n];
                    if (!(0, s.C)(r)) continue;
                    let l = (function (e) {
                        let t = e.match(o);
                        if (null == t) return null;
                        let n = e.split("#")[0];
                        return 0 === n.length
                            ? null
                            : {
                                  imageUrl: n,
                                  x: parseInt(t[1], 10),
                                  y: parseInt(t[2], 10),
                                  w: parseInt(t[3], 10),
                                  h: parseInt(t[4], 10),
                              };
                    })(r.text);
                    null != l && t.push({ startSec: r.startTime, endSec: r.endTime, ...l });
                }
                t.sort((e, t) => e.startSec - t.startSec), i({ url: n, cues: t });
            };
            return (
                r.addEventListener("load", l),
                r.readyState === HTMLTrackElement.LOADED && l(),
                () => r.removeEventListener("load", l)
            );
        }, [n, t, e]),
        l.useEffect(() => {
            if (null == r || 0 === r.length || !e) return;
            let t = new Image();
            return (
                (t.onload = () => d(r)),
                (t.src = r),
                () => {
                    t.onload = null;
                }
            );
        }, [r, e]),
        null != a && a?.url === n && u === r ? a.cues : c
    );
}
function m(e, t) {
    if (0 === e.length) return null;
    let n = 0,
        r = e.length - 1;
    for (; n <= r; ) {
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
function f(e) {
    let { cue: t, timeSec: n, cursorXPx: l, timelineWidthPx: s } = e;
    if (t.w <= 0 || t.h <= 0) return null;
    let o = t.w / 2,
        c = 8 + o,
        d = Math.max(c, s - 8 - o),
        m = Math.max(c, Math.min(l, d));
    return (0, r.jsxs)("div", {
        className: u.kL,
        "aria-hidden": !0,
        style: { left: `${m}px`, bottom: "16px", width: `${t.w}px` },
        children: [
            (0, r.jsx)("div", {
                className: u.FF,
                style: {
                    width: `${t.w}px`,
                    height: `${t.h}px`,
                    backgroundImage: `url(${t.imageUrl})`,
                    backgroundPosition: `-${t.x}px -${t.y}px`,
                    backgroundRepeat: "no-repeat",
                },
            }),
            (0, r.jsx)(i.E, {
                className: u.Sp,
                variant: "text-xs/normal",
                color: "always-white",
                tabularNumbers: !0,
                children: (0, a.rB)(n),
            }),
        ],
    });
}
