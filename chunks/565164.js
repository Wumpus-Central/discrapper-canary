n.d(t, { B8: () => m, wb: () => h, z5: () => d }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(61491),
    i = n(834730),
    s = n(984212),
    u = n(875699);
let o = /#xywh=(\d+),(\d+),(\d+),(\d+)/i,
    c = [];
function d(e, t, n) {
    let [r, a] = l.useState(null),
        [i, u] = l.useState(null);
    return (
        l.useEffect(() => {
            if (null == t || 0 === t.length) return;
            let n = e.current;
            if (null == n) return;
            n.track.mode = "hidden";
            let r = () => {
                let e = n.track.cues ?? [],
                    r = [];
                for (let t = 0; t < e.length; t++) {
                    let n = e[t];
                    if (!(0, s.C)(n)) continue;
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
                    })(n.text);
                    null != l && r.push({ startSec: n.startTime, endSec: n.endTime, ...l });
                }
                r.sort((e, t) => e.startSec - t.startSec), a({ url: t, cues: r });
            };
            return (
                n.addEventListener("load", r),
                n.readyState === HTMLTrackElement.LOADED && r(),
                () => n.removeEventListener("load", r)
            );
        }, [t, e]),
        l.useEffect(() => {
            if (null == n || 0 === n.length) return;
            let e = new Image();
            return (
                (e.onload = () => u(n)),
                (e.src = n),
                () => {
                    e.onload = null;
                }
            );
        }, [n]),
        null != r && r?.url === t && i === n ? r.cues : c
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
function h(e) {
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
