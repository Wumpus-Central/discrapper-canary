n.d(t, { Ay: () => k, fD: () => D });
var a = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    i = n(140735),
    s = n(155718),
    o = n(383233),
    d = n(207963),
    c = n(953756),
    u = n(292366),
    m = n(544101),
    _ = n(532719),
    p = n(343778),
    h = n(162493),
    A = n(367232),
    C = n(650076),
    x = n(379107),
    f = n(126727),
    E = n(430506),
    I = n(620513),
    N = n(145885),
    g = n(371068),
    v = n(61266),
    T = n(324877),
    b = n(567971),
    S = n(615390),
    j = n(747176),
    O = n(383797),
    y = n(183924),
    R = n(920409),
    P = n(532294),
    L = n(143517);
function D(e) {
    return e.map((e, t) =>
        (0, a.jsxs)(a.Fragment, {
            children: [
                (function e(t, n) {
                    switch (t.type) {
                        case s.I5.ACTION_ROW:
                            return (0, a.jsx)(j.A, { ...t, renderComponents: D }, n);
                        case s.I5.BUTTON:
                            return (0, a.jsx)(u.A, { ...t }, n);
                        case s.I5.STRING_SELECT:
                            return (0, a.jsx)(x.A, { ...t }, n);
                        case s.I5.CHANNEL_SELECT:
                            return (0, a.jsx)(m.A, { ...t }, n);
                        case s.I5.USER_SELECT:
                        case s.I5.ROLE_SELECT:
                        case s.I5.MENTIONABLE_SELECT:
                            return (0, a.jsx)(A.A, { ...t }, n);
                        case s.I5.TEXT_INPUT:
                            return (0, a.jsx)(f.A, { ...t }, n);
                        case s.I5.SECTION:
                            return (0, a.jsx)(R.A, { ...t, renderComponents: D }, n);
                        case s.I5.TEXT_DISPLAY:
                            return (0, a.jsx)(v.A, { ...t }, n);
                        case s.I5.MEDIA_GALLERY:
                            return (0, a.jsx)(N.A, { ...t }, n);
                        case s.I5.THUMBNAIL:
                            return (0, a.jsx)(T.A, { ...t }, n);
                        case s.I5.FILE:
                            return (0, a.jsx)(I.A, { ...t }, n);
                        case s.I5.SEPARATOR:
                            return (0, a.jsx)(g.A, { ...t }, n);
                        case s.I5.CONTENT_INVENTORY_ENTRY:
                            return (0, a.jsx)(S.A, { ...t }, n);
                        case s.I5.CONTAINER:
                            return (0, a.jsx)(O.A, { ...t, renderComponents: D }, n);
                        case s.I5.LABEL:
                            return (0, a.jsx)(y.A, { ...t, renderComponent: e }, n);
                        case s.I5.FILE_UPLOAD:
                            return (0, a.jsx)(h.A, { ...t }, n);
                        case s.I5.CHECKPOINT_CARD:
                            if (t.checkpointData.version === P.w.V2025) return (0, a.jsx)(E.A, { ...t }, n);
                            return (0, a.jsx)(b.A, {}, n);
                        case s.I5.RADIO_GROUP:
                            return (0, a.jsx)(C.A, { ...t }, n);
                        case s.I5.CHECKBOX_GROUP:
                            return (0, a.jsx)(p.A, { ...t }, n);
                        case s.I5.CHECKBOX:
                            return (0, a.jsx)(_.A, { ...t }, n);
                        default:
                            return (0, a.jsx)(b.A, {}, n);
                    }
                })(e, t.toString()),
                (0, a.jsx)(i.A, { children: "," }),
            ],
        }),
    );
}
function k(e) {
    let { message: t, shouldDisableInteractiveComponents: n } = e,
        { components: l } = t,
        [i, s] = (0, c.zn)();
    return 0 === l.length
        ? null
        : (0, a.jsx)(d.f5, {
              message: t,
              shouldDisableInteractiveComponents: n,
              children: (0, a.jsx)(c.O7.Root, {
                  containerInnerWidth: s,
                  children: (0, a.jsx)("div", {
                      style: { width: "100%" },
                      ref: i,
                      children: (0, a.jsx)(c.O7.AutoMeasuredNestedContainer, {
                          children: (e) =>
                              (0, a.jsx)("div", {
                                  ref: e,
                                  className: r()([L.k, { [L.z]: (0, o._c)(t) }]),
                                  children: D(l),
                              }),
                      }),
                  }),
              }),
          });
}
