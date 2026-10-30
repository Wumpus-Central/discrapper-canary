n.d(t, { default: () => I });
var l,
    i = n(477900),
    a = n(582128),
    r = n(837381),
    s = n(189213),
    o = n(765178),
    d = n(858899),
    u = n(506309),
    c = n(123292),
    g = n(834730),
    h = n(265872),
    f = n(939249),
    m = n(112173),
    x = n(778712),
    p = n(658675),
    S = n(308528),
    v = n(928039),
    b = n(47167),
    j = n(359378),
    y = n(598104),
    T = n(980707),
    k = n(477782);
(n(321073), n(839272));
var C = n(309199),
    E = n(734057),
    P = n(573163),
    O = n(935208),
    w = (((l = {}).NEWEST = "newest"), (l.OLDEST = "oldest"), l);
function A(e, t) {
    return e.toSorted((e, n) => ("newest" === t ? n.lastActivity - e.lastActivity : e.lastActivity - n.lastActivity));
}
var D = n(28959),
    M = n(105292),
    z = n(443648);
function N(e) {
    let { sortOrder: t, onChangeSortOrder: n, closePopout: l } = e;
    return (0, i.jsx)("div", {
        className: z.k,
        children: (0, i.jsx)(T.W, {
            navId: "clean-up-gdms-sort",
            "aria-label": M.intl.string(D.default.yySzqH),
            hideScroller: !0,
            onClose: l,
            onSelect: l,
            children: (0, i.jsxs)(k.rX, {
                children: [
                    (0, i.jsx)(k.iD, {
                        id: "clean-up-gdms-sort-newest",
                        group: "clean-up-gdms-sort",
                        label: M.intl.string(D.default.VHmOpK),
                        checked: t === w.NEWEST,
                        action: () => {
                            (n(w.NEWEST), l());
                        },
                    }),
                    (0, i.jsx)(k.iD, {
                        id: "clean-up-gdms-sort-oldest",
                        group: "clean-up-gdms-sort",
                        label: M.intl.string(D.default.NLTGck),
                        checked: t === w.OLDEST,
                        action: () => {
                            (n(w.OLDEST), l());
                        },
                    }),
                ],
            }),
        }),
    });
}
var H = n(373207);
let G = { height: 480 };
function I(e) {
    let { transitionState: t, onClose: n } = e,
        [l] = a.useState(() =>
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5e3,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                    n = (function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 180,
                            t = new Date();
                        return (t.setDate(t.getDate() - e), t.getTime());
                    })(t),
                    l = [];
                for (let e of Object.values(E.A.getMutablePrivateChannels())) {
                    let t = (function (e, t) {
                        if (!e.isGroupDM() || (0, C.k_)(e.id)) return null;
                        let n = (function (e, t) {
                            let n = P.Ay.lastMessageTimestamp(e);
                            if (n > 0) return n;
                            let l = P.Ay.lastMessageId(e) ?? t ?? e;
                            return O.default.extractTimestamp(l);
                        })(e.id, e.lastMessageId);
                        return n < t ? n : null;
                    })(e, n);
                    null != t && l.push({ channel: e, lastActivity: t });
                }
                return A(l, "oldest").slice(0, e);
            })(),
        ),
        [g, h] = a.useState(w.OLDEST),
        [f, m] = a.useState(() => new Set(l.slice(0, 1e3).map((e) => e.channel.id))),
        [x, p] = a.useState(!1),
        b = a.useMemo(() => A(l, g), [l, g]),
        j = 0 === l.length,
        y = f.size,
        T = Math.min(l.length, 1e3),
        k = l.length <= 1e3,
        z = T > 0 && y >= T,
        N = y >= 1e3,
        I = a.useCallback(
            (e, t) => {
                let n = !f.has(e);
                (n && f.size >= 1e3) ||
                    (null != t &&
                        o.O.announce(
                            M.intl.formatToPlainString(n ? D.default["SsUZo/"] : D.default.x03WqE, {
                                name: t,
                                count: n ? y + 1 : y - 1,
                            }),
                            "polite",
                        ),
                    m((t) => {
                        let n = new Set(t);
                        return (n.has(e) ? n.delete(e) : n.size < 1e3 && n.add(e), n);
                    }));
            },
            [f, y],
        ),
        _ = a.useCallback(() => {
            let e = y >= T,
                t = e ? 0 : T;
            (o.O.announce(
                e ? M.intl.string(D.default.hhQnsH) : M.intl.formatToPlainString(D.default.GpUOWb, { count: t }),
                "polite",
            ),
                m((e) => (e.size >= T ? new Set() : new Set(b.slice(0, 1e3).map((e) => e.channel.id)))));
        }, [b, T, y]),
        B = a.useCallback(
            async (e) => {
                try {
                    await S.A.bulkLeaveGroupDMs(e);
                } catch (t) {
                    let e;
                    if ((p(!1), t?.status === 409)) e = M.intl.string(D.default.ojlzko);
                    else if (t?.status === 429) {
                        let n = t.body?.retry_after;
                        e =
                            "number" == typeof n && Number.isFinite(n) && n > 0
                                ? M.intl.formatToPlainString(D.default.SHTZTm, { seconds: Math.ceil(n) })
                                : M.intl.string(D.default.f5Xg0V);
                    } else e = M.intl.string(D.default["+HM0x2"]);
                    (0, d.P0)({ text: e, variant: "critical" });
                    return;
                }
                ((0, d.P0)({
                    text: M.intl.formatToPlainString(D.default.b2r81u, { count: e.length }),
                    variant: "success",
                }),
                    n().catch(() => {}));
            },
            [n],
        ),
        F = a.useCallback(() => {
            let e = Array.from(f);
            0 !== e.length && (p(!0), B(e));
        }, [f, B]),
        K = 0 === y ? M.intl.string(D.default.YBjUwi) : M.intl.formatToPlainString(D.default.SakG2D, { count: y }),
        q = (0, u.W)(16),
        U = a.useRef(null),
        V = (0, v.A)("clean-up-inactive-gdms-modal", U),
        Y = a.useMemo(
            () => ({
                sections: [b.length],
                sectionHeight: 0,
                rowHeight: 48,
                paddingBottom: q,
                style: G,
                renderRow: (e) => {
                    let { row: t } = e,
                        n = b[t];
                    if (null == n) return null;
                    let l = f.has(n.channel.id);
                    return (0, i.jsx)(
                        W,
                        {
                            gdm: n,
                            selected: l,
                            disabled: N && !l,
                            onToggle: I,
                            ariaSetSize: b.length,
                            ariaPosInSet: t + 1,
                        },
                        n.channel.id,
                    );
                },
            }),
            [b, f, N, I, q],
        );
    return (0, i.jsx)(r.hD, {
        navigator: V,
        children: (0, i.jsx)(r.PR, {
            children: (e) => {
                let { ref: l, ...a } = e;
                return (0, i.jsx)(s.a, {
                    transitionState: t,
                    onClose: n,
                    title: M.intl.string(D.default.FrCK4r),
                    subtitle: M.intl.string(D.default["2Cgdhl"]),
                    input: j
                        ? void 0
                        : (0, i.jsxs)("div", {
                              className: H.HO,
                              children: [
                                  (0, i.jsx)(R, { sortOrder: g, onChangeSortOrder: h }),
                                  (0, i.jsx)(c.Q, {
                                      variant: "primary",
                                      textVariant: "text-sm/medium",
                                      onClick: _,
                                      text: z
                                          ? M.intl.string(D.default.jxi9GF)
                                          : k
                                            ? M.intl.string(D.default.mKxGpP)
                                            : M.intl.formatToPlainString(D.default["9oRyjg"], { count: 1e3 }),
                                  }),
                              ],
                          }),
                    listProps: j
                        ? void 0
                        : {
                              ...Y,
                              ...a,
                              innerRole: void 0,
                              ref: (e) => {
                                  ((U.current = e), (l.current = e?.getScrollerNode() ?? null));
                              },
                          },
                    actions: j
                        ? [
                              {
                                  variant: "secondary",
                                  text: M.intl.string(M.t["ETE/oC"]),
                                  onClick: () => {
                                      n();
                                  },
                              },
                          ]
                        : [{ variant: "critical-primary", text: K, onClick: F, disabled: 0 === y, loading: x }],
                    children: j ? (0, i.jsx)(L, {}) : void 0,
                });
            },
        }),
    });
}
function L() {
    return (0, i.jsxs)("div", {
        className: H.p$,
        style: G,
        children: [
            (0, i.jsx)(g.E, { variant: "text-md/medium", children: M.intl.string(D.default.s8TEkh) }),
            (0, i.jsx)(g.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: M.intl.string(D.default["Y//IPC"]),
            }),
        ],
    });
}
function R(e) {
    let { sortOrder: t, onChangeSortOrder: n } = e,
        l = a.useRef(null);
    return (0, i.jsx)(h.Y, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(N, { sortOrder: t, onChangeSortOrder: n, closePopout: l });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: a } = t;
            return (0, i.jsxs)(f.D, {
                innerRef: l,
                className: H.$O,
                onClick: n,
                "aria-label": M.intl.string(D.default.yySzqH),
                "aria-expanded": a,
                children: [
                    (0, i.jsx)(g.E, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: M.intl.string(D.default["FLgBG/"]),
                    }),
                    (0, i.jsx)(m.J, { size: "xxs", color: "currentColor" }),
                ],
            });
        },
    });
}
function W(e) {
    let { gdm: t, selected: n, disabled: l, onToggle: a, ariaSetSize: r, ariaPosInSet: s } = e,
        o = (0, b.Ay)(t.channel) ?? void 0,
        d = t.channel.recipients.length + 1;
    return (0, i.jsx)(j.A, {
        listItemId: t.channel.id,
        icon: (0, i.jsx)(y.A, { "aria-hidden": !0, size: x._3.SIZE_32, channel: t.channel }),
        label: o,
        subLabel: M.intl.formatToPlainString(M.t.ABMKx3, { members: d }),
        selected: n,
        disabled: l,
        trailing: (0, i.jsx)(p.P, { checked: n, disabled: l }),
        onPress: () => a(t.channel.id, o),
        "aria-label": o,
        "aria-setsize": r,
        "aria-posinset": s,
    });
}
