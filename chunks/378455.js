n.d(t, { default: () => L });
var l,
    i = n(477900),
    a = n(582128),
    r = n(189213),
    s = n(691540),
    o = n(857250),
    d = n(97483),
    u = n(506309),
    c = n(123292),
    g = n(834730),
    h = n(922016),
    m = n(939249),
    f = n(112173),
    x = n(778712),
    S = n(308528),
    p = n(47167),
    v = n(359378),
    b = n(598104),
    j = n(980707),
    C = n(477782);
n(321073), n(839272);
var k = n(309199),
    y = n(734057),
    T = n(568548),
    E = n(935208),
    P = (((l = {}).NEWEST = "newest"), (l.OLDEST = "oldest"), l);
function w(e, t) {
    return e.toSorted((e, n) => ("newest" === t ? n.lastActivity - e.lastActivity : e.lastActivity - n.lastActivity));
}
var A = n(592080),
    D = n(375708),
    M = n(945619);
function O(e) {
    let { sortOrder: t, onChangeSortOrder: n, closePopout: l } = e;
    return (0, i.jsx)("div", {
        className: M.k,
        children: (0, i.jsx)(j.W, {
            navId: "clean-up-gdms-sort",
            "aria-label": D.intl.string(A.default.yySzqH),
            hideScroller: !0,
            onClose: l,
            onSelect: l,
            children: (0, i.jsxs)(C.rX, {
                children: [
                    (0, i.jsx)(C.iD, {
                        id: "clean-up-gdms-sort-newest",
                        group: "clean-up-gdms-sort",
                        label: D.intl.string(A.default.VHmOpK),
                        checked: t === P.NEWEST,
                        action: () => {
                            n(P.NEWEST), l();
                        },
                    }),
                    (0, i.jsx)(C.iD, {
                        id: "clean-up-gdms-sort-oldest",
                        group: "clean-up-gdms-sort",
                        label: D.intl.string(A.default.NLTGck),
                        checked: t === P.OLDEST,
                        action: () => {
                            n(P.OLDEST), l();
                        },
                    }),
                ],
            }),
        }),
    });
}
var z = n(169186);
let I = { height: 480 };
function L(e) {
    let { transitionState: t, onClose: n } = e,
        [l] = a.useState(() =>
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5e3,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                    n = (function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 180,
                            t = new Date();
                        return t.setDate(t.getDate() - e), t.getTime();
                    })(t),
                    l = [];
                for (let e of Object.values(y.A.getMutablePrivateChannels())) {
                    let t = (function (e, t) {
                        if (!e.isGroupDM() || (0, k.k_)(e.id)) return null;
                        let n = (function (e, t) {
                            let n = T.Ay.lastMessageTimestamp(e);
                            if (n > 0) return n;
                            let l = T.Ay.lastMessageId(e) ?? t ?? e;
                            return E.default.extractTimestamp(l);
                        })(e.id, e.lastMessageId);
                        return n < t ? n : null;
                    })(e, n);
                    null != t && l.push({ channel: e, lastActivity: t });
                }
                return w(l, "oldest").slice(0, e);
            })(),
        ),
        [g, h] = a.useState(P.OLDEST),
        [m, f] = a.useState(() => new Set(l.slice(0, 1e3).map((e) => e.channel.id))),
        [x, p] = a.useState(!1),
        v = a.useMemo(() => w(l, g), [l, g]),
        b = 0 === l.length,
        j = m.size,
        C = Math.min(l.length, 1e3),
        M = l.length <= 1e3,
        O = C > 0 && j >= C,
        L = j >= 1e3,
        R = a.useCallback((e) => {
            f((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.size < 1e3 && n.add(e), n;
            });
        }, []),
        _ = a.useCallback(() => {
            f((e) => (e.size >= C ? new Set() : new Set(v.slice(0, 1e3).map((e) => e.channel.id))));
        }, [v, C]),
        F = a.useCallback(
            async (e) => {
                try {
                    await S.A.bulkLeaveGroupDMs(e);
                } catch (t) {
                    let e;
                    if ((p(!1), t?.status === 409)) e = D.intl.string(A.default.ojlzko);
                    else if (t?.status === 429) {
                        let n = t.body?.retry_after;
                        e =
                            "number" == typeof n && Number.isFinite(n) && n > 0
                                ? D.intl.formatToPlainString(A.default.SHTZTm, { seconds: Math.ceil(n) })
                                : D.intl.string(A.default.f5Xg0V);
                    } else e = D.intl.string(A.default["+HM0x2"]);
                    (0, s.P0)((0, o.o)(e, d.Ck.FAILURE));
                    return;
                }
                (0, s.P0)((0, o.o)(D.intl.formatToPlainString(A.default.b2r81u, { count: e.length }), d.Ck.SUCCESS)),
                    n().catch(() => {});
            },
            [n],
        ),
        W = a.useCallback(() => {
            let e = Array.from(m);
            0 !== e.length && (p(!0), F(e));
        }, [m, F]),
        B = 0 === j ? D.intl.string(A.default.YBjUwi) : D.intl.formatToPlainString(A.default.SakG2D, { count: j }),
        K = (0, u.W)(16),
        U = a.useMemo(
            () => ({
                sections: [v.length],
                sectionHeight: 0,
                rowHeight: 48,
                paddingBottom: K,
                style: I,
                renderRow: (e) => {
                    let { row: t } = e,
                        n = v[t];
                    if (null == n) return null;
                    let l = m.has(n.channel.id);
                    return (0, i.jsx)(
                        G,
                        {
                            gdm: n,
                            selected: l,
                            disabled: L && !l,
                            onToggle: R,
                            ariaSetSize: v.length,
                            ariaPosInSet: t + 1,
                        },
                        n.channel.id,
                    );
                },
            }),
            [v, m, L, R, K],
        );
    return (0, i.jsx)(r.Modal, {
        transitionState: t,
        onClose: n,
        title: D.intl.string(A.default.FrCK4r),
        subtitle: D.intl.string(A.default["2Cgdhl"]),
        input: b
            ? void 0
            : (0, i.jsxs)("div", {
                  className: z.HO,
                  children: [
                      (0, i.jsx)(H, { sortOrder: g, onChangeSortOrder: h }),
                      (0, i.jsx)(c.Q, {
                          variant: "primary",
                          textVariant: "text-sm/medium",
                          onClick: _,
                          text: O
                              ? D.intl.string(A.default.jxi9GF)
                              : M
                                ? D.intl.string(A.default.mKxGpP)
                                : D.intl.formatToPlainString(A.default["9oRyjg"], { count: 1e3 }),
                      }),
                  ],
              }),
        listProps: b ? void 0 : U,
        actions: b
            ? [{ variant: "secondary", text: D.intl.string(D.t["ETE/oC"]), onClick: () => void n() }]
            : [{ variant: "critical-primary", text: B, onClick: W, disabled: 0 === j, loading: x }],
        children: b ? (0, i.jsx)(N, {}) : void 0,
    });
}
function N() {
    return (0, i.jsxs)("div", {
        className: z.p$,
        style: I,
        children: [
            (0, i.jsx)(g.E, { variant: "text-md/medium", children: D.intl.string(A.default.s8TEkh) }),
            (0, i.jsx)(g.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: D.intl.string(A.default["Y//IPC"]),
            }),
        ],
    });
}
function H(e) {
    let { sortOrder: t, onChangeSortOrder: n } = e,
        l = a.useRef(null);
    return (0, i.jsx)(h.Y, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(O, { sortOrder: t, onChangeSortOrder: n, closePopout: l });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: a } = t;
            return (0, i.jsxs)(m.D, {
                innerRef: l,
                className: z.$O,
                onClick: n,
                "aria-label": D.intl.string(A.default.yySzqH),
                "aria-expanded": a,
                children: [
                    (0, i.jsx)(g.E, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: D.intl.string(A.default["FLgBG/"]),
                    }),
                    (0, i.jsx)(f.J, { size: "xxs", color: "currentColor" }),
                ],
            });
        },
    });
}
function G(e) {
    let { gdm: t, selected: n, disabled: l, onToggle: a, ariaSetSize: r, ariaPosInSet: s } = e,
        o = (0, p.Ay)(t.channel) ?? "",
        d = t.channel.recipients.length + 1;
    return (0, i.jsx)(v.A, {
        listItemId: t.channel.id,
        icon: (0, i.jsx)(b.A, { "aria-hidden": !0, size: x._3.SIZE_32, channel: t.channel }),
        label: o,
        subLabel: D.intl.formatToPlainString(D.t.ABMKx3, { members: d }),
        selected: n,
        disabled: l,
        onPress: () => a(t.channel.id),
        "aria-label": o,
        "aria-setsize": r,
        "aria-posinset": s,
    });
}
