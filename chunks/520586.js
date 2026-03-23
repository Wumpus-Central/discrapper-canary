n.d(t, { Ay: () => U, fD: () => D });
var l = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    s = n(397927),
    i = n(155718),
    o = n(383233),
    c = n(207963),
    d = n(953756),
    u = n(292366),
    m = n(544101),
    p = n(532719),
    A = n(343778),
    h = n(162493),
    C = n(367232),
    E = n(650076),
    x = n(379107),
    N = n(126727),
    I = n(430506),
    f = n(620513),
    _ = n(145885),
    g = n(371068),
    T = n(61266),
    v = n(324877),
    j = n(567971),
    S = n(615390),
    O = n(747176),
    R = n(383797),
    y = n(183924),
    b = n(920409),
    P = n(532294),
    L = n(87528);
function D(e) {
    return e.map((e, t) =>
        (0, l.jsxs)(l.Fragment, {
            children: [
                (function e(t, n) {
                    switch (t.type) {
                        case i.I5.ACTION_ROW:
                            return (0, l.jsx)(O.A, { ...t, renderComponents: D }, n);
                        case i.I5.BUTTON:
                            return (0, l.jsx)(u.A, { ...t }, n);
                        case i.I5.STRING_SELECT:
                            return (0, l.jsx)(x.A, { ...t }, n);
                        case i.I5.CHANNEL_SELECT:
                            return (0, l.jsx)(m.A, { ...t }, n);
                        case i.I5.USER_SELECT:
                        case i.I5.ROLE_SELECT:
                        case i.I5.MENTIONABLE_SELECT:
                            return (0, l.jsx)(C.A, { ...t }, n);
                        case i.I5.TEXT_INPUT:
                            return (0, l.jsx)(N.A, { ...t }, n);
                        case i.I5.SECTION:
                            return (0, l.jsx)(b.A, { ...t, renderComponents: D }, n);
                        case i.I5.TEXT_DISPLAY:
                            return (0, l.jsx)(T.A, { ...t }, n);
                        case i.I5.MEDIA_GALLERY:
                            return (0, l.jsx)(_.A, { ...t }, n);
                        case i.I5.THUMBNAIL:
                            return (0, l.jsx)(v.A, { ...t }, n);
                        case i.I5.FILE:
                            return (0, l.jsx)(f.A, { ...t }, n);
                        case i.I5.SEPARATOR:
                            return (0, l.jsx)(g.A, { ...t }, n);
                        case i.I5.CONTENT_INVENTORY_ENTRY:
                            return (0, l.jsx)(S.A, { ...t }, n);
                        case i.I5.CONTAINER:
                            return (0, l.jsx)(R.A, { ...t, renderComponents: D }, n);
                        case i.I5.LABEL:
                            return (0, l.jsx)(y.A, { ...t, renderComponent: e }, n);
                        case i.I5.FILE_UPLOAD:
                            return (0, l.jsx)(h.A, { ...t }, n);
                        case i.I5.CHECKPOINT_CARD:
                            if (t.checkpointData.version === P.w.V2025) return (0, l.jsx)(I.A, { ...t }, n);
                            return (0, l.jsx)(j.A, {}, n);
                        case i.I5.RADIO_GROUP:
                            return (0, l.jsx)(E.A, { ...t }, n);
                        case i.I5.CHECKBOX_GROUP:
                            return (0, l.jsx)(A.A, { ...t }, n);
                        case i.I5.CHECKBOX:
                            return (0, l.jsx)(p.A, { ...t }, n);
                        default:
                            return (0, l.jsx)(j.A, {}, n);
                    }
                })(e, t.toString()),
                (0, l.jsx)(s.AC4, { children: "," }),
            ],
        }),
    );
}
function U(e) {
    let { message: t, shouldDisableInteractiveComponents: n } = e,
        { components: a } = t,
        [s, i] = (0, d.zn)();
    return 0 === a.length
        ? null
        : (0, l.jsx)(c.f5, {
              message: t,
              shouldDisableInteractiveComponents: n,
              children: (0, l.jsx)(d.O7.Root, {
                  containerInnerWidth: i,
                  children: (0, l.jsx)("div", {
                      style: { width: "100%" },
                      ref: s,
                      children: (0, l.jsx)(d.O7.AutoMeasuredNestedContainer, {
                          children: (e) =>
                              (0, l.jsx)("div", {
                                  ref: e,
                                  className: r()([L.k, { [L.z]: (0, o._c)(t) }]),
                                  children: D(a),
                              }),
                      }),
                  }),
              }),
          });
}
