"use strict";
n.d(t, { A: () => v });
var l = n(627968);
n(64700);
var a = n(503698),
    s = n.n(a),
    i = n(939249),
    r = n(111159),
    o = n(834730),
    d = n(885574),
    c = n(789645),
    u = n(534514),
    m = n(853742),
    h = n(835369),
    g = n(253913),
    x = n(49999),
    f = n(985018),
    _ = n(419949),
    p = n(478699),
    j = n(330070),
    b = n(827469);
function v(e) {
    let { onDismiss: t } = e;
    return (0, l.jsxs)(i.D, {
        onClick: () => {
            open(g.X_), (0, m.Md)({ readGuideCta: !0 });
        },
        className: s()(j.kL, p.kL, _.mainCard),
        children: [
            (0, l.jsxs)("div", {
                className: p.mG,
                children: [
                    (0, l.jsxs)("div", {
                        className: p.cy,
                        children: [
                            (0, l.jsx)(r.p, {
                                size: "custom",
                                width: 28,
                                height: 28,
                                color: "currentColor",
                                className: p.Mg,
                            }),
                            (0, l.jsx)(o.E, {
                                variant: "text-sm/semibold",
                                color: "text-strong",
                                children: f.intl.string(f.t.uvGmCx),
                            }),
                            (0, l.jsxs)("div", {
                                className: p.lm,
                                children: [
                                    (0, l.jsx)(d.m, { size: "md", color: "currentColor", className: p.G }),
                                    (0, l.jsx)(o.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: f.intl.string(f.t.t2GkVR),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsx)(i.D, {
                        onClick: (e) => {
                            e.stopPropagation(), t(x.i.DISMISS), (0, m.Md)({ readGuideCta: !1 });
                        },
                        children: (0, l.jsx)(c.P, { size: "xs", color: "currentColor", className: p.ut }),
                    }),
                ],
            }),
            (0, l.jsx)("hr", { className: p.me }),
            (0, l.jsxs)("div", {
                className: p.mG,
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(u.D, {
                                className: s()(j.__invalid_channelName, p.DD),
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: f.intl.string(f.t.JtSpD0),
                            }),
                            (0, l.jsx)(o.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: f.intl.string(f.t.Ajhp03),
                            }),
                        ],
                    }),
                    (0, l.jsx)("img", { src: b, alt: f.intl.string(f.t.gAlJzV), width: h.T5, height: h.T5 }),
                ],
            }),
        ],
    });
}
