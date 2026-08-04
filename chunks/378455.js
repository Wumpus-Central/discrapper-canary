n.d(t, { default: () => R });
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
    p = n(308528),
    v = n(928039),
    j = n(47167),
    b = n(359378),
    C = n(598104),
    k = n(980707),
    y = n(477782);
n(321073), n(839272);
var T = n(309199),
    E = n(734057),
    P = n(568548),
    A = n(935208),
    w = (((l = {}).NEWEST = "newest"), (l.OLDEST = "oldest"), l);
function D(e, t) {
    return e.toSorted((e, n) => ("newest" === t ? n.lastActivity - e.lastActivity : e.lastActivity - n.lastActivity));
}
var M = n(592080),
    O = n(375708),
    z = n(945619);
function N(e) {
    let { sortOrder: t, onChangeSortOrder: n, closePopout: l } = e;
    return (0, i.jsx)("div", {
        className: z.k,
        children: (0, i.jsx)(k.W, {
            navId: "clean-up-gdms-sort",
            "aria-label": O.intl.string(M.default.yySzqH),
            hideScroller: !0,
            onClose: l,
            onSelect: l,
            children: (0, i.jsxs)(y.rX, {
                children: [
                    (0, i.jsx)(y.iD, {
                        id: "clean-up-gdms-sort-newest",
                        group: "clean-up-gdms-sort",
                        label: O.intl.string(M.default.VHmOpK),
                        checked: t === w.NEWEST,
                        action: () => {
                            n(w.NEWEST), l();
                        },
                    }),
                    (0, i.jsx)(y.iD, {
                        id: "clean-up-gdms-sort-oldest",
                        group: "clean-up-gdms-sort",
                        label: O.intl.string(M.default.NLTGck),
                        checked: t === w.OLDEST,
                        action: () => {
                            n(w.OLDEST), l();
                        },
                    }),
                ],
            }),
        }),
    });
}
var I = n(169186);
let L = { height: 480 };
function R(e) {
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
                for (let e of Object.values(E.A.getMutablePrivateChannels())) {
                    let t = (function (e, t) {
                        if (!e.isGroupDM() || (0, T.k_)(e.id)) return null;
                        let n = (function (e, t) {
                            let n = P.Ay.lastMessageTimestamp(e);
                            if (n > 0) return n;
                            let l = P.Ay.lastMessageId(e) ?? t ?? e;
                            return A.default.extractTimestamp(l);
                        })(e.id, e.lastMessageId);
                        return n < t ? n : null;
                    })(e, n);
                    null != t && l.push({ channel: e, lastActivity: t });
                }
                return D(l, "oldest").slice(0, e);
            })(),
        ),
        [h, f] = r.useState(w.OLDEST),
        [m, x] = r.useState(() => new Set(l.slice(0, 1e3).map((e) => e.channel.id))),
        [S, j] = r.useState(!1),
        b = r.useMemo(() => D(l, h), [l, h]),
        C = 0 === l.length,
        k = m.size,
        y = Math.min(l.length, 1e3),
        z = l.length <= 1e3,
        N = y > 0 && k >= y,
        R = k >= 1e3,
        F = r.useCallback((e) => {
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
                    await p.A.bulkLeaveGroupDMs(e);
                } catch (t) {
                    let e;
                    if ((j(!1), t?.status === 409)) e = O.intl.string(M.default.ojlzko);
                    else if (t?.status === 429) {
                        let n = t.body?.retry_after;
                        e =
                            "number" == typeof n && Number.isFinite(n) && n > 0
                                ? O.intl.formatToPlainString(M.default.SHTZTm, { seconds: Math.ceil(n) })
                                : O.intl.string(M.default.f5Xg0V);
                    } else e = O.intl.string(M.default["+HM0x2"]);
                    (0, o.P0)((0, d.o)(e, u.Ck.FAILURE));
                    return;
                }
                (0, o.P0)((0, d.o)(O.intl.formatToPlainString(M.default.b2r81u, { count: e.length }), u.Ck.SUCCESS)),
                    n().catch(() => {});
            },
            [n],
        ),
        K = r.useCallback(() => {
            let e = Array.from(m);
            0 !== e.length && (j(!0), B(e));
        }, [m, B]),
        U = 0 === k ? O.intl.string(M.default.YBjUwi) : O.intl.formatToPlainString(M.default.SakG2D, { count: k }),
        V = (0, c.W)(16),
        Y = r.useRef(null),
        q = (0, v.A)("clean-up-inactive-gdms-modal", Y),
        X = r.useMemo(
            () => ({
                sections: [b.length],
                sectionHeight: 0,
                rowHeight: 48,
                paddingBottom: V,
                style: L,
                renderRow: (e) => {
                    let { row: t } = e,
                        n = b[t];
                    if (null == n) return null;
                    let l = m.has(n.channel.id);
                    return (0, i.jsx)(
                        _,
                        {
                            gdm: n,
                            selected: l,
                            disabled: R && !l,
                            onToggle: F,
                            ariaSetSize: b.length,
                            ariaPosInSet: t + 1,
                        },
                        n.channel.id,
                    );
                },
            }),
            [b, m, R, F, V],
        );
    return (0, i.jsx)(a.hD, {
        navigator: q,
        children: (0, i.jsx)(a.PR, {
            children: (e) => {
                let { ref: l, ...r } = e;
                return (0, i.jsx)(s.Modal, {
                    transitionState: t,
                    onClose: n,
                    title: O.intl.string(M.default.FrCK4r),
                    subtitle: O.intl.string(M.default["2Cgdhl"]),
                    input: C
                        ? void 0
                        : (0, i.jsxs)("div", {
                              className: I.HO,
                              children: [
                                  (0, i.jsx)(G, { sortOrder: h, onChangeSortOrder: f }),
                                  (0, i.jsx)(g.Q, {
                                      variant: "primary",
                                      textVariant: "text-sm/medium",
                                      onClick: W,
                                      text: N
                                          ? O.intl.string(M.default.jxi9GF)
                                          : z
                                            ? O.intl.string(M.default.mKxGpP)
                                            : O.intl.formatToPlainString(M.default["9oRyjg"], { count: 1e3 }),
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
                        ? [{ variant: "secondary", text: O.intl.string(O.t["ETE/oC"]), onClick: () => void n() }]
                        : [{ variant: "critical-primary", text: U, onClick: K, disabled: 0 === k, loading: S }],
                    children: C ? (0, i.jsx)(H, {}) : void 0,
                });
            },
        }),
    });
}
function H() {
    return (0, i.jsxs)("div", {
        className: I.p$,
        style: L,
        children: [
            (0, i.jsx)(h.E, { variant: "text-md/medium", children: O.intl.string(M.default.s8TEkh) }),
            (0, i.jsx)(h.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: O.intl.string(M.default["Y//IPC"]),
            }),
        ],
    });
}
function G(e) {
    let { sortOrder: t, onChangeSortOrder: n } = e,
        l = r.useRef(null);
    return (0, i.jsx)(f.Y, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(N, { sortOrder: t, onChangeSortOrder: n, closePopout: l });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsxs)(m.D, {
                innerRef: l,
                className: I.$O,
                onClick: n,
                "aria-label": O.intl.string(M.default.yySzqH),
                "aria-expanded": r,
                children: [
                    (0, i.jsx)(h.E, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: O.intl.string(M.default["FLgBG/"]),
                    }),
                    (0, i.jsx)(x.J, { size: "xxs", color: "currentColor" }),
                ],
            });
        },
    });
}
function _(e) {
    let { gdm: t, selected: n, disabled: l, onToggle: r, ariaSetSize: a, ariaPosInSet: s } = e,
        o = (0, j.Ay)(t.channel) ?? "",
        d = t.channel.recipients.length + 1;
    return (0, i.jsx)(b.A, {
        listItemId: t.channel.id,
        icon: (0, i.jsx)(C.A, { "aria-hidden": !0, size: S._3.SIZE_32, channel: t.channel }),
        label: o,
        subLabel: O.intl.formatToPlainString(O.t.ABMKx3, { members: d }),
        selected: n,
        disabled: l,
        onPress: () => r(t.channel.id),
        "aria-label": o,
        "aria-setsize": a,
        "aria-posinset": s,
    });
}
