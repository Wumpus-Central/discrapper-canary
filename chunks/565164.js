"use strict";
n.d(t, { B8: () => _, wb: () => E, z5: () => u }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(61491),
    s = n(834730),
    l = n(984212),
    o = n(875699);
let d = /#xywh=(\d+),(\d+),(\d+),(\d+)/i,
    c = [];
function u(e, t, n, i) {
    let [a, s] = r.useState(null),
        [o, u] = r.useState(null);
    return (
        r.useEffect(() => {
            if (null == n || 0 === n.length || !e) return;
            let i = t.current;
            if (null == i) return;
            i.track.mode = "hidden";
            let r = () => {
                let e = i.track.cues ?? [],
                    t = [];
                for (let n = 0; n < e.length; n++) {
                    let i = e[n];
                    if (!(0, l.C)(i)) continue;
                    let r = (function (e) {
                        let t = e.match(d);
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
                    })(i.text);
                    null != r && t.push({ startSec: i.startTime, endSec: i.endTime, ...r });
                }
                t.sort((e, t) => e.startSec - t.startSec), s({ url: n, cues: t });
            };
            return (
                i.addEventListener("load", r),
                i.readyState === HTMLTrackElement.LOADED && r(),
                () => i.removeEventListener("load", r)
            );
        }, [n, t, e]),
        r.useEffect(() => {
            if (null == i || 0 === i.length || !e) return;
            let t = new Image();
            return (
                (t.onload = () => u(i)),
                (t.src = i),
                () => {
                    t.onload = null;
                }
            );
        }, [i, e]),
        null != a && a?.url === n && o === i ? a.cues : c
    );
}
function _(e, t) {
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
function E(e) {
    let { cue: t, timeSec: n, cursorXPx: r, timelineWidthPx: l } = e;
    if (t.w <= 0 || t.h <= 0) return null;
    let d = t.w / 2,
        c = 8 + d,
        u = Math.max(c, l - 8 - d),
        _ = Math.max(c, Math.min(r, u));
    return (0, i.jsxs)("div", {
        className: o.kL,
        "aria-hidden": !0,
        style: { left: `${_}px`, bottom: "16px", width: `${t.w}px` },
        children: [
            (0, i.jsx)("div", {
                className: o.FF,
                style: {
                    width: `${t.w}px`,
                    height: `${t.h}px`,
                    backgroundImage: `url(${t.imageUrl})`,
                    backgroundPosition: `-${t.x}px -${t.y}px`,
                    backgroundRepeat: "no-repeat",
                },
            }),
            (0, i.jsx)(s.E, {
                className: o.Sp,
                variant: "text-xs/normal",
                color: "text-overlay-light",
                tabularNumbers: !0,
                children: (0, a.rB)(n),
            }),
        ],
    });
}
