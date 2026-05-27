"use strict";
n.d(t, { B8: () => _, wb: () => h, z5: () => d }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(61491),
    a = n(834730),
    o = n(984212),
    l = n(875699);
let u = /#xywh=(\d+),(\d+),(\d+),(\d+)/i,
    c = [];
function d(e, t, n) {
    let [i, s] = r.useState(null),
        [a, l] = r.useState(null);
    return (
        r.useEffect(() => {
            if (null == t || 0 === t.length) return;
            let n = e.current;
            if (null == n) return;
            n.track.mode = "hidden";
            let i = () => {
                let e = n.track.cues ?? [],
                    i = [];
                for (let t = 0; t < e.length; t++) {
                    let n = e[t];
                    if (!(0, o.C)(n)) continue;
                    let r = (function (e) {
                        let t = e.match(u);
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
                    null != r && i.push({ startSec: n.startTime, endSec: n.endTime, ...r });
                }
                i.sort((e, t) => e.startSec - t.startSec), s({ url: t, cues: i });
            };
            return (
                n.addEventListener("load", i),
                n.readyState === HTMLTrackElement.LOADED && i(),
                () => n.removeEventListener("load", i)
            );
        }, [t, e]),
        r.useEffect(() => {
            if (null == n || 0 === n.length) return;
            let e = new Image();
            return (
                (e.onload = () => l(n)),
                (e.src = n),
                () => {
                    e.onload = null;
                }
            );
        }, [n]),
        null != i && i?.url === t && a === n ? i.cues : c
    );
}
function _(e, t) {
    if (0 === e.length) return null;
    let n = 0,
        i = e.length - 1;
    for (; n <= i; ) {
        let r = (n + i) >> 1,
            s = e[r];
        if (t < s.startSec) i = r - 1;
        else {
            if (!(t >= s.endSec)) return s;
            n = r + 1;
        }
    }
    return e[Math.max(0, Math.min(n, e.length - 1))];
}
function h(e) {
    let { cue: t, timeSec: n, cursorXPx: r, timelineWidthPx: o } = e;
    if (t.w <= 0 || t.h <= 0) return null;
    let u = t.w / 2,
        c = 8 + u,
        d = Math.max(c, o - 8 - u),
        _ = Math.max(c, Math.min(r, d));
    return (0, i.jsxs)("div", {
        className: l.kL,
        "aria-hidden": !0,
        style: { left: `${_}px`, bottom: "16px", width: `${t.w}px` },
        children: [
            (0, i.jsx)("div", {
                className: l.FF,
                style: {
                    width: `${t.w}px`,
                    height: `${t.h}px`,
                    backgroundImage: `url(${t.imageUrl})`,
                    backgroundPosition: `-${t.x}px -${t.y}px`,
                    backgroundRepeat: "no-repeat",
                },
            }),
            (0, i.jsx)(a.E, {
                className: l.Sp,
                variant: "text-xs/normal",
                color: "always-white",
                tabularNumbers: !0,
                children: (0, s.rB)(n),
            }),
        ],
    });
}
