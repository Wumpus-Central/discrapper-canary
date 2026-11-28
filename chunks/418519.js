i.d(e, { default: () => U });
var n = i(477900),
    l = i(582128),
    a = i(855986),
    r = i(189213),
    s = i(289873),
    o = i(834730),
    u = i(683438),
    d = i(711950),
    c = i(988912),
    m = i(826603),
    g = i(681579),
    f = i(535820),
    h = i(994500),
    x = i(287809),
    y = i(735547),
    p = i(242225);
function b(t) {
    return t.type === y.OK.FRIEND || t.type === y.OK.DM;
}
function A(t, e, i) {
    return t
        .filter(b)
        .map((t) => t.item)
        .filter((t) => (0, p.A)(t, e, i));
}
var v = i(235876),
    S = i(71393),
    j = i(145890),
    I = i(841459),
    C = i(213374),
    N = i(331322),
    k = i(534514),
    E = i(291848),
    T = i(792996),
    w = i(839568);
function P(t) {
    let { displayNoun: e } = t;
    return (0, n.jsxs)(N.B, {
        gap: 8,
        align: "center",
        className: w.HY,
        children: [
            (0, n.jsx)(k.D, { variant: "heading-lg/semibold", children: T.intl.string(E.default["3qrm/9"]) }),
            (0, n.jsx)(o.E, {
                variant: "body-md/medium",
                color: "text-muted",
                children: T.intl.formatToPlainString(E.default["NyR+6P"], { displayNoun: e ?? "other" }),
            }),
        ],
    });
}
var R = i(778712),
    B = i(652215),
    D = i(966327),
    O = i(855755),
    F = i(290863),
    G = i(427262),
    H = i(75095),
    K = i(172799);
let M = l.memo(function (t) {
    let { user: e, sendState: i, onInvite: r } = t,
        s = l.useId(),
        u = l.useCallback(() => r(e), [r, e]),
        d = (0, O.A)(i === K.iu.SENT),
        { status: c, isMobileOnline: m } = (0, a.cf)(
            [F.A],
            () => ({ status: F.A.getStatus(e.id), isMobileOnline: F.A.isMobileOnline(e.id) }),
            [e.id],
        );
    return (0, n.jsxs)("div", {
        ref: d,
        role: "listitem",
        tabIndex: -1,
        className: w.nM,
        children: [
            (0, n.jsx)(D.A, {
                user: e,
                size: R._3.SIZE_32,
                status: c !== B.clD.OFFLINE ? c : void 0,
                isMobile: m,
                "aria-hidden": !0,
            }),
            (0, n.jsxs)(N.B, {
                gap: 0,
                className: w.qg,
                children: [
                    (0, n.jsx)(o.E, {
                        id: s,
                        variant: "body-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: G.Ay.getName(e),
                    }),
                    (0, n.jsx)(o.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        children: G.Ay.getUserTag(e, { decoration: "never" }),
                    }),
                ],
            }),
            (0, n.jsx)(H.A, { sendState: i, onInvite: u, nameId: s }),
        ],
    });
});
function U(t) {
    let e,
        i,
        y,
        p,
        { guildId: b, ...N } = t,
        {
            users: k,
            isLoading: R,
            hasNoFriends: D,
            search: O,
        } = (function () {
            let t = (0, a.yK)([f.A, h.A, x.default], () =>
                    A(f.A.getInviteSuggestionRows(), x.default.getCurrentUser()?.id, h.A),
                ),
                [e, i] = l.useState(!0),
                [n, r] = l.useState(!1),
                s = l.useRef(""),
                o = l.useCallback((t) => {
                    ((s.current = t), (0, g.B)(t));
                }, []);
            return (
                l.useEffect(() => {
                    !(async function () {
                        try {
                            (await (0, g.t)({ omitUserIds: new Set() }),
                                r(0 === A(f.A.getInviteSuggestionRows(), x.default.getCurrentUser()?.id, h.A).length));
                        } catch {
                            return;
                        } finally {
                            i(!1);
                        }
                        "" !== s.current && (0, g.B)(s.current);
                    })();
                }, []),
                { users: t, isLoading: e, hasNoFriends: n, search: o }
            );
        })(),
        { getSendState: F, handleInvite: G } =
            ((i =
                null != (e = (0, a.bG)([S.A], () => S.A.getGuild(b)?.linkedGameOrganization ?? null))
                    ? (0, j.A)(e)
                    : null),
            (y = (0, v.i)((t) => (null != i ? t[i] : void 0))),
            {
                getSendState: l.useCallback((t) => y?.[t] ?? null, [y]),
                handleInvite: l.useCallback(
                    (t) => {
                        null != e && (0, I.A)((0, j.A)(e), e, t, C.A);
                    },
                    [e],
                ),
            }),
        { data: H, isLoading: K } = (0, m.c)(b),
        U = (0, a.bG)([c.A], () => c.A.getDisplayNounByGuildId(b), [b]),
        [_, q] = l.useState(""),
        z = l.useCallback(
            (t) => {
                (q(t), O(t));
            },
            [O],
        ),
        L = l.useCallback(() => z(""), [z]),
        Q = l.useCallback(
            (t) => {
                let { row: e } = t,
                    i = k[e];
                return (0, n.jsx)(M, { user: i, sendState: F(i.id), onInvite: G }, i.id);
            },
            [k, F, G],
        ),
        V = R || (null == H && K);
    p =
        V || 0 === k.length
            ? {
                  sections: [1],
                  sectionHeight: 0,
                  rowHeight: 192,
                  innerRole: "list",
                  renderRow: () =>
                      (0, n.jsx)(
                          "div",
                          {
                              role: "listitem",
                              className: w.h5,
                              children: V
                                  ? (0, n.jsx)(s.y, {})
                                  : (0, n.jsx)(o.E, {
                                        variant: "body-sm/medium",
                                        color: "text-muted",
                                        children: T.intl.string(T.t.ojoWgX),
                                    }),
                          },
                          "status",
                      ),
              }
            : { sections: [k.length], sectionHeight: 0, rowHeight: 48, innerRole: "list", renderRow: Q };
    let W = H?.name,
        X =
            null != W
                ? T.intl.formatToPlainString(E.default.UoO0dk, { orgName: W })
                : T.intl.formatToPlainString(E.default.cRK6SQ, { displayNoun: U ?? "other" }),
        Y = T.intl.formatToPlainString(E.default.EnTIIr, { displayNoun: U ?? "other" }),
        Z =
            null != W
                ? T.intl.formatToPlainString(E.default.VGOQ4v, { orgName: W, displayNoun: U ?? "other" })
                : T.intl.formatToPlainString(E.default.BBk7Qw, { displayNoun: U ?? "other" });
    return !V && D
        ? (0, n.jsx)(r.a, {
              ...N,
              title: Y,
              subtitle: Z,
              actions: [
                  {
                      variant: "primary",
                      text: T.intl.string(E.default.kdLF2T),
                      onClick: () => {
                          (d.A.transitionToSection(B.m3P.ADD_FRIEND, { explicit: !0 }), N.onClose());
                      },
                  },
              ],
              children: (0, n.jsx)(P, { displayNoun: U }),
          })
        : (0, n.jsx)(r.a, {
              ...N,
              title: Y,
              subtitle: V ? void 0 : Z,
              input: V
                  ? void 0
                  : (0, n.jsx)(u.I, {
                        size: "md",
                        query: _,
                        onChange: z,
                        onClear: L,
                        placeholder: X,
                        "aria-label": X,
                        autoFocus: !0,
                    }),
              listProps: p,
              actionBarInput: V
                  ? void 0
                  : (0, n.jsx)(o.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: T.intl.formatToPlainString(E.default.yKyx41, { days: 7 }),
                    }),
              actions: [],
          });
}
i(673383);
