n.d(t, { A: () => N, R: () => I });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(36525),
    a = n(192308),
    o = n(534514),
    d = n(834730),
    c = n(245604),
    u = n(695366),
    m = n(219504),
    g = n(975571),
    h = n(555337),
    x = n(923121),
    _ = n(352821),
    p = n(250006),
    A = n(652215),
    E = n(539916),
    f = n(985018),
    j = n(816214);
function N(e) {
    let { saveOnClose: t } = e,
        r = (0, s.bG)([h.A], () => h.A.getGuildId()),
        u = (0, s.bG)([_.A], () => _.A.getEditedConnections()),
        N = (0, s.bG)([_.A], () => _.A.isSubmitting()),
        I = l.useRef(r);
    l.useEffect(() => {
        I.current = r;
    }, [r]),
        l.useEffect(() => {
            let { current: e } = I;
            return () => {
                t && null != e && (0, x.fH)(e);
            };
        }, [t, r]);
    let C = l.useCallback(() => {
            null != r &&
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await n.e("90194").then(n.bind(n, 566857));
                    return (t) => (0, i.jsx)(e, { ...t });
                });
        }, [r]),
        b = l.useMemo(() => u.map((e) => ({ ...e, id: (0, E.Sq)(e) })), [u]),
        v = l.useCallback((e) => {
            let t = e.map((e) => {
                let { id: t, ...n } = e;
                return n;
            });
            (0, x.Bq)(t);
        }, []),
        { handleDragStart: S, handleDragReset: T, handleDragComplete: y, draggingId: R } = (0, m.A)(b, v);
    if (null == r) return null;
    let L = u.length < E.pA;
    return (0, i.jsx)("div", {
        className: j.kL,
        children: (0, i.jsxs)("div", {
            className: j.jx,
            children: [
                (0, i.jsxs)("div", {
                    className: j.G6,
                    children: [
                        (0, i.jsx)(o.D, { variant: "heading-lg/bold", children: f.intl.string(f.t.Cl8F8H) }),
                        (0, i.jsx)(d.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: f.intl.format(f.t.vqgyJR, {
                                linkedRolesUrl: g.A.getArticleURL(A.MVz.CONNECTION_DETAILS_ADMIN),
                            }),
                        }),
                    ],
                }),
                u.length > 0 &&
                    (0, i.jsx)("div", {
                        className: j.eF,
                        children: b.map((e, t) =>
                            (0, i.jsx)(
                                p.A,
                                {
                                    connection: e,
                                    index: t,
                                    onDragStart: S,
                                    onDragReset: T,
                                    onDragComplete: y,
                                    draggingId: R,
                                },
                                e.id,
                            ),
                        ),
                    }),
                (0, i.jsxs)("button", {
                    className: j.qG,
                    onClick: C,
                    disabled: !L || N,
                    type: "button",
                    children: [
                        (0, i.jsx)(c.U, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                        (0, i.jsx)(d.E, {
                            variant: "text-md/semibold",
                            color: "text-brand",
                            children: f.intl.string(f.t["03EqaC"]),
                        }),
                    ],
                }),
                !L &&
                    (0, i.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: f.intl.format(f.t.Nc7guW, { max: E.pA }),
                    }),
            ],
        }),
    });
}
function I() {
    let e = (0, s.bG)([h.A], () => h.A.getGuildId()),
        t = (0, s.bG)([_.A], () => _.A.isSubmitting()),
        n = (0, s.bG)([_.A], () => _.A.getErrors());
    if (null == e) return null;
    let l = n.length > 0;
    return (0, i.jsx)(r.A, {
        onSave: () => {
            l || (0, x.q3)(e);
        },
        onReset: x.p2,
        submitting: t,
        onSaveText: f.intl.string(f.t["R3BPH+"]),
        disabled: l,
        errorMessage: l
            ? (0, i.jsx)("div", {
                  className: j.Tt,
                  children: (0, i.jsx)("ul", {
                      className: j.qr,
                      children: n.map((e, t) =>
                          (0, i.jsxs)(
                              "li",
                              {
                                  className: j.Ff,
                                  children: [
                                      (0, i.jsx)(u.E, { size: "sm", color: "currentColor" }),
                                      (0, i.jsx)(d.E, {
                                          variant: "text-sm/normal",
                                          color: "text-feedback-critical",
                                          children: e,
                                      }),
                                  ],
                              },
                              t,
                          ),
                      ),
                  }),
              })
            : null,
    });
}
