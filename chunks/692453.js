"use strict";
n.d(t, { A: () => p, R: () => f });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(36525),
    a = n(397927),
    o = n(219504),
    d = n(975571),
    c = n(555337),
    u = n(923121),
    m = n(352821),
    g = n(250006),
    x = n(652215),
    h = n(539916),
    _ = n(985018),
    A = n(902973);
function p(e) {
    let { saveOnClose: t } = e,
        r = (0, l.bG)([c.A], () => c.A.getGuildId()),
        p = (0, l.bG)([m.A], () => m.A.getEditedConnections()),
        f = (0, l.bG)([m.A], () => m.A.isSubmitting()),
        j = s.useRef(r);
    s.useEffect(() => {
        j.current = r;
    }, [r]),
        s.useEffect(() => {
            let { current: e } = j;
            return () => {
                t && null != e && (0, u.fH)(e);
            };
        }, [t, r]);
    let N = s.useCallback(() => {
            null != r &&
                (0, a.mMO)(async () => {
                    let { default: e } = await n.e("90194").then(n.bind(n, 566857));
                    return (t) => (0, i.jsx)(e, { ...t });
                });
        }, [r]),
        E = s.useMemo(() => p.map((e) => ({ ...e, id: (0, h.Sq)(e) })), [p]),
        b = s.useCallback((e) => {
            let t = e.map((e) => {
                let { id: t, ...n } = e;
                return n;
            });
            (0, u.Bq)(t);
        }, []),
        { handleDragStart: T, handleDragReset: C, handleDragComplete: I, draggingId: v } = (0, o.A)(E, b);
    if (null == r) return null;
    let S = p.length < h.pA;
    return (0, i.jsx)("div", {
        className: A.kL,
        children: (0, i.jsxs)("div", {
            className: A.jx,
            children: [
                (0, i.jsxs)("div", {
                    className: A.G6,
                    children: [
                        (0, i.jsx)(a.Heading, { variant: "heading-lg/bold", children: _.intl.string(_.t.Cl8F8H) }),
                        (0, i.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: _.intl.format(_.t.vqgyJR, {
                                linkedRolesUrl: d.A.getArticleURL(x.MVz.CONNECTION_DETAILS_ADMIN),
                            }),
                        }),
                    ],
                }),
                p.length > 0 &&
                    (0, i.jsx)("div", {
                        className: A.eF,
                        children: E.map((e, t) =>
                            (0, i.jsx)(
                                g.A,
                                {
                                    connection: e,
                                    index: t,
                                    onDragStart: T,
                                    onDragReset: C,
                                    onDragComplete: I,
                                    draggingId: v,
                                },
                                e.id,
                            ),
                        ),
                    }),
                (0, i.jsxs)("button", {
                    className: A.qG,
                    onClick: N,
                    disabled: !S || f,
                    type: "button",
                    children: [
                        (0, i.jsx)(a.U1e, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                        (0, i.jsx)(a.Text, {
                            variant: "text-md/semibold",
                            color: "text-brand",
                            children: _.intl.string(_.t["03EqaC"]),
                        }),
                    ],
                }),
                !S &&
                    (0, i.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: _.intl.format(_.t.Nc7guW, { max: h.pA }),
                    }),
            ],
        }),
    });
}
function f() {
    let e = (0, l.bG)([c.A], () => c.A.getGuildId()),
        t = (0, l.bG)([m.A], () => m.A.isSubmitting()),
        n = (0, l.bG)([m.A], () => m.A.getErrors());
    if (null == e) return null;
    let s = n.length > 0;
    return (0, i.jsx)(r.A, {
        onSave: () => {
            s || (0, u.q3)(e);
        },
        onReset: u.p2,
        submitting: t,
        onSaveText: _.intl.string(_.t["R3BPH+"]),
        disabled: s,
        errorMessage: s
            ? (0, i.jsx)("div", {
                  className: A.Tt,
                  children: (0, i.jsx)("ul", {
                      className: A.qr,
                      children: n.map((e, t) =>
                          (0, i.jsxs)(
                              "li",
                              {
                                  className: A.Ff,
                                  children: [
                                      (0, i.jsx)(a.EpV, { size: "sm", color: "currentColor" }),
                                      (0, i.jsx)(a.Text, {
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
