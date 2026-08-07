n.d(t, { default: () => H });
var l,
    i = n(477900),
    r = n(582128),
    a = n(837381),
    s = n(189213),
    o = n(691540),
    d = n(857250),
    u = n(97483),
    c = n(506309),
    g = n(123292),
    h = n(834730),
    f = n(922016),
    m = n(939249),
    x = n(112173),
    S = n(778712),
    p = n(658675),
    v = n(308528),
    j = n(928039),
    b = n(47167),
    C = n(359378),
    k = n(598104),
    y = n(980707),
    T = n(477782);
n(321073), n(839272);
var E = n(309199),
    P = n(734057),
    A = n(568548),
    w = n(935208),
    D = (((l = {}).NEWEST = "newest"), (l.OLDEST = "oldest"), l);
function M(e, t) {
    return e.toSorted((e, n) => ("newest" === t ? n.lastActivity - e.lastActivity : e.lastActivity - n.lastActivity));
}
var O = n(592080),
    z = n(375708),
    N = n(945619);
function I(e) {
    let { sortOrder: t, onChangeSortOrder: n, closePopout: l } = e;
    return (0, i.jsx)("div", {
        className: N.k,
        children: (0, i.jsx)(y.W, {
            navId: "clean-up-gdms-sort",
            "aria-label": z.intl.string(O.default.yySzqH),
            hideScroller: !0,
            onClose: l,
            onSelect: l,
            children: (0, i.jsxs)(T.rX, {
                children: [
                    (0, i.jsx)(T.iD, {
                        id: "clean-up-gdms-sort-newest",
                        group: "clean-up-gdms-sort",
                        label: z.intl.string(O.default.VHmOpK),
                        checked: t === D.NEWEST,
                        action: () => {
                            n(D.NEWEST), l();
                        },
                    }),
                    (0, i.jsx)(T.iD, {
                        id: "clean-up-gdms-sort-oldest",
                        group: "clean-up-gdms-sort",
                        label: z.intl.string(O.default.NLTGck),
                        checked: t === D.OLDEST,
                        action: () => {
                            n(D.OLDEST), l();
                        },
                    }),
                ],
            }),
        }),
    });
}
var L = n(169186);
let R = { height: 480 };
function H(e) {
    let { transitionState: t, onClose: n } = e,
        [l] = r.useState(() =>
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5e3,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                    n = (function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 180,
                            t = new Date();
                        return t.setDate(t.getDate() - e), t.getTime();
                    })(t),
                    l = [];
                for (let e of Object.values(P.A.getMutablePrivateChannels())) {
                    let t = (function (e, t) {
                        if (!e.isGroupDM() || (0, E.k_)(e.id)) return null;
                        let n = (function (e, t) {
                            let n = A.Ay.lastMessageTimestamp(e);
                            if (n > 0) return n;
                            let l = A.Ay.lastMessageId(e) ?? t ?? e;
                            return w.default.extractTimestamp(l);
                        })(e.id, e.lastMessageId);
                        return n < t ? n : null;
                    })(e, n);
                    null != t && l.push({ channel: e, lastActivity: t });
                }
                return M(l, "oldest").slice(0, e);
            })(),
        ),
        [h, f] = r.useState(D.OLDEST),
        [m, x] = r.useState(() => new Set(l.slice(0, 1e3).map((e) => e.channel.id))),
        [S, p] = r.useState(!1),
        b = r.useMemo(() => M(l, h), [l, h]),
        C = 0 === l.length,
        k = m.size,
        y = Math.min(l.length, 1e3),
        T = l.length <= 1e3,
        N = y > 0 && k >= y,
        I = k >= 1e3,
        H = r.useCallback((e) => {
            x((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.size < 1e3 && n.add(e), n;
            });
        }, []),
        W = r.useCallback(() => {
            x((e) => (e.size >= y ? new Set() : new Set(b.slice(0, 1e3).map((e) => e.channel.id))));
        }, [b, y]),
        B = r.useCallback(
            async (e) => {
                try {
                    await v.A.bulkLeaveGroupDMs(e);
                } catch (t) {
                    let e;
                    if ((p(!1), t?.status === 409)) e = z.intl.string(O.default.ojlzko);
                    else if (t?.status === 429) {
                        let n = t.body?.retry_after;
                        e =
                            "number" == typeof n && Number.isFinite(n) && n > 0
                                ? z.intl.formatToPlainString(O.default.SHTZTm, { seconds: Math.ceil(n) })
                                : z.intl.string(O.default.f5Xg0V);
                    } else e = z.intl.string(O.default["+HM0x2"]);
                    (0, o.P0)((0, d.o)(e, u.Ck.FAILURE));
                    return;
                }
                (0, o.P0)((0, d.o)(z.intl.formatToPlainString(O.default.b2r81u, { count: e.length }), u.Ck.SUCCESS)),
                    n().catch(() => {});
            },
            [n],
        ),
        K = r.useCallback(() => {
            let e = Array.from(m);
            0 !== e.length && (p(!0), B(e));
        }, [m, B]),
        U = 0 === k ? z.intl.string(O.default.YBjUwi) : z.intl.formatToPlainString(O.default.SakG2D, { count: k }),
        V = (0, c.W)(16),
        Y = r.useRef(null),
        q = (0, j.A)("clean-up-inactive-gdms-modal", Y),
        X = r.useMemo(
            () => ({
                sections: [b.length],
                sectionHeight: 0,
                rowHeight: 48,
                paddingBottom: V,
                style: R,
                renderRow: (e) => {
                    let { row: t } = e,
                        n = b[t];
                    if (null == n) return null;
                    let l = m.has(n.channel.id);
                    return (0, i.jsx)(
                        F,
                        {
                            gdm: n,
                            selected: l,
                            disabled: I && !l,
                            onToggle: H,
                            ariaSetSize: b.length,
                            ariaPosInSet: t + 1,
                        },
                        n.channel.id,
                    );
                },
            }),
            [b, m, I, H, V],
        );
    return (0, i.jsx)(a.hD, {
        navigator: q,
        children: (0, i.jsx)(a.PR, {
            children: (e) => {
                let { ref: l, ...r } = e;
                return (0, i.jsx)(s.Modal, {
                    transitionState: t,
                    onClose: n,
                    title: z.intl.string(O.default.FrCK4r),
                    subtitle: z.intl.string(O.default["2Cgdhl"]),
                    input: C
                        ? void 0
                        : (0, i.jsxs)("div", {
                              className: L.HO,
                              children: [
                                  (0, i.jsx)(_, { sortOrder: h, onChangeSortOrder: f }),
                                  (0, i.jsx)(g.Q, {
                                      variant: "primary",
                                      textVariant: "text-sm/medium",
                                      onClick: W,
                                      text: N
                                          ? z.intl.string(O.default.jxi9GF)
                                          : T
                                            ? z.intl.string(O.default.mKxGpP)
                                            : z.intl.formatToPlainString(O.default["9oRyjg"], { count: 1e3 }),
                                  }),
                              ],
                          }),
                    listProps: C
                        ? void 0
                        : {
                              ...X,
                              ...r,
                              innerRole: void 0,
                              ref: (e) => {
                                  (Y.current = e), (l.current = e?.getScrollerNode() ?? null);
                              },
                          },
                    actions: C
                        ? [
                              {
                                  variant: "secondary",
                                  text: z.intl.string(z.t["ETE/oC"]),
                                  onClick: () => {
                                      n();
                                  },
                              },
                          ]
                        : [{ variant: "critical-primary", text: U, onClick: K, disabled: 0 === k, loading: S }],
                    children: C ? (0, i.jsx)(G, {}) : void 0,
                });
            },
        }),
    });
}
function G() {
    return (0, i.jsxs)("div", {
        className: L.p$,
        style: R,
        children: [
            (0, i.jsx)(h.E, { variant: "text-md/medium", children: z.intl.string(O.default.s8TEkh) }),
            (0, i.jsx)(h.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: z.intl.string(O.default["Y//IPC"]),
            }),
        ],
    });
}
function _(e) {
    let { sortOrder: t, onChangeSortOrder: n } = e,
        l = r.useRef(null);
    return (0, i.jsx)(f.Y, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(I, { sortOrder: t, onChangeSortOrder: n, closePopout: l });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsxs)(m.D, {
                innerRef: l,
                className: L.$O,
                onClick: n,
                "aria-label": z.intl.string(O.default.yySzqH),
                "aria-expanded": r,
                children: [
                    (0, i.jsx)(h.E, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: z.intl.string(O.default["FLgBG/"]),
                    }),
                    (0, i.jsx)(x.J, { size: "xxs", color: "currentColor" }),
                ],
            });
        },
    });
}
function F(e) {
    let { gdm: t, selected: n, disabled: l, onToggle: r, ariaSetSize: a, ariaPosInSet: s } = e,
        o = (0, b.Ay)(t.channel) ?? "",
        d = t.channel.recipients.length + 1;
    return (0, i.jsx)(C.A, {
        listItemId: t.channel.id,
        icon: (0, i.jsx)(k.A, { "aria-hidden": !0, size: S._3.SIZE_32, channel: t.channel }),
        label: o,
        subLabel: z.intl.formatToPlainString(z.t.ABMKx3, { members: d }),
        selected: n,
        disabled: l,
        trailing: (0, i.jsx)(p.P, { checked: n, disabled: l }),
        onPress: () => r(t.channel.id),
        "aria-label": o,
        "aria-setsize": a,
        "aria-posinset": s,
    });
}
