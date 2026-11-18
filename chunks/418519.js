n.d(e, { default: () => _ });
var i = n(477900),
    l = n(582128),
    a = n(189213),
    r = n(289873),
    s = n(834730),
    o = n(683438),
    u = n(711950),
    d = n(136463),
    c = n(124077),
    m = n(855986),
    g = n(681579),
    f = n(535820),
    h = n(994500),
    x = n(287809),
    A = n(735547),
    b = n(242225);
function v(t) {
    return t.type === A.OK.FRIEND || t.type === A.OK.DM;
}
function p(t, e, n) {
    return t
        .filter(v)
        .map((t) => t.item)
        .filter((t) => (0, b.A)(t, e, n));
}
var y = n(235876),
    S = n(71393),
    j = n(145890),
    C = n(841459),
    I = n(213374),
    k = n(331322),
    N = n(534514),
    w = n(752222),
    E = n(792996),
    T = n(839568);
function P() {
    return (0, i.jsxs)(k.B, {
        gap: 8,
        align: "center",
        className: T.HY,
        children: [
            (0, i.jsx)(N.D, { variant: "heading-lg/semibold", children: E.intl.string(w.default["3qrm/9"]) }),
            (0, i.jsx)(s.E, {
                variant: "body-md/medium",
                color: "text-muted",
                children: E.intl.formatToPlainString(w.default["NyR+6P"], {
                    noun: (0, c.A)({ displayNoun: null, lowercase: !0 }),
                }),
            }),
        ],
    });
}
var R = n(778712),
    O = n(652215),
    B = n(966327),
    D = n(855755),
    F = n(290863),
    H = n(427262),
    K = n(75095),
    M = n(172799);
let U = l.memo(function (t) {
    let { user: e, sendState: n, onInvite: a } = t,
        r = l.useId(),
        o = l.useCallback(() => a(e), [a, e]),
        u = (0, D.A)(n === M.iu.SENT),
        { status: d, isMobileOnline: c } = (0, m.cf)(
            [F.A],
            () => ({ status: F.A.getStatus(e.id), isMobileOnline: F.A.isMobileOnline(e.id) }),
            [e.id],
        );
    return (0, i.jsxs)("div", {
        ref: u,
        role: "listitem",
        tabIndex: -1,
        className: T.nM,
        children: [
            (0, i.jsx)(B.A, {
                user: e,
                size: R._3.SIZE_32,
                status: d !== O.clD.OFFLINE ? d : void 0,
                isMobile: c,
                "aria-hidden": !0,
            }),
            (0, i.jsxs)(k.B, {
                gap: 0,
                className: T.qg,
                children: [
                    (0, i.jsx)(s.E, {
                        id: r,
                        variant: "body-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: H.Ay.getName(e),
                    }),
                    (0, i.jsx)(s.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        children: H.Ay.getUserTag(e, { decoration: "never" }),
                    }),
                ],
            }),
            (0, i.jsx)(K.A, { sendState: n, onInvite: o, nameId: r }),
        ],
    });
});
function _(t) {
    let e,
        n,
        A,
        b,
        { guildId: v, ...k } = t,
        {
            users: N,
            isLoading: R,
            hasNoFriends: B,
            search: D,
        } = (function () {
            let t = (0, m.yK)([f.A, h.A, x.default], () =>
                    p(f.A.getInviteSuggestionRows(), x.default.getCurrentUser()?.id, h.A),
                ),
                [e, n] = l.useState(!0),
                [i, a] = l.useState(!1),
                r = l.useRef(""),
                s = l.useCallback((t) => {
                    ((r.current = t), (0, g.B)(t));
                }, []);
            return (
                l.useEffect(() => {
                    !(async function () {
                        try {
                            (await (0, g.t)({ omitUserIds: new Set() }),
                                a(0 === p(f.A.getInviteSuggestionRows(), x.default.getCurrentUser()?.id, h.A).length));
                        } catch {
                            return;
                        } finally {
                            n(!1);
                        }
                        "" !== r.current && (0, g.B)(r.current);
                    })();
                }, []),
                { users: t, isLoading: e, hasNoFriends: i, search: s }
            );
        })(),
        { getSendState: F, handleInvite: H } =
            ((n =
                null != (e = (0, m.bG)([S.A], () => S.A.getGuild(v)?.linkedGameOrganization ?? null))
                    ? (0, j.A)(e)
                    : null),
            (A = (0, y.i)((t) => (null != n ? t[n] : void 0))),
            {
                getSendState: l.useCallback((t) => A?.[t] ?? null, [A]),
                handleInvite: l.useCallback(
                    (t) => {
                        null != e && (0, C.A)((0, j.A)(e), e, t, I.A);
                    },
                    [e],
                ),
            }),
        { data: K, isLoading: M } = (0, d.c)(v),
        [_, G] = l.useState(""),
        q = l.useCallback(
            (t) => {
                (G(t), D(t));
            },
            [D],
        ),
        z = l.useCallback(() => q(""), [q]),
        L = l.useCallback(
            (t) => {
                let { row: e } = t,
                    n = N[e];
                return (0, i.jsx)(U, { user: n, sendState: F(n.id), onInvite: H }, n.id);
            },
            [N, F, H],
        ),
        Q = R || (null == K && M);
    b =
        Q || 0 === N.length
            ? {
                  sections: [1],
                  sectionHeight: 0,
                  rowHeight: 192,
                  innerRole: "list",
                  renderRow: () =>
                      (0, i.jsx)(
                          "div",
                          {
                              role: "listitem",
                              className: T.h5,
                              children: Q
                                  ? (0, i.jsx)(r.y, {})
                                  : (0, i.jsx)(s.E, {
                                        variant: "body-sm/medium",
                                        color: "text-muted",
                                        children: E.intl.string(E.t.ojoWgX),
                                    }),
                          },
                          "status",
                      ),
              }
            : { sections: [N.length], sectionHeight: 0, rowHeight: 48, innerRole: "list", renderRow: L };
    let V = (0, c.A)({ displayNoun: null }),
        W = K?.name,
        X =
            null != W
                ? E.intl.formatToPlainString(w.default.UoO0dk, { orgName: W })
                : E.intl.formatToPlainString(w.default.cRK6SQ, { noun: V }),
        Y = E.intl.formatToPlainString(w.default.EnTIIr, { noun: V }),
        Z =
            null != W
                ? E.intl.formatToPlainString(w.default.VGOQ4v, {
                      orgName: W,
                      noun: (0, c.A)({ displayNoun: null, lowercase: !0 }),
                  })
                : E.intl.formatToPlainString(w.default.BBk7Qw, { noun: V });
    return !Q && B
        ? (0, i.jsx)(a.a, {
              ...k,
              title: Y,
              subtitle: Z,
              actions: [
                  {
                      variant: "primary",
                      text: E.intl.string(w.default.kdLF2T),
                      onClick: () => {
                          (u.A.transitionToSection(O.m3P.ADD_FRIEND, { explicit: !0 }), k.onClose());
                      },
                  },
              ],
              children: (0, i.jsx)(P, {}),
          })
        : (0, i.jsx)(a.a, {
              ...k,
              title: Y,
              subtitle: Q ? void 0 : Z,
              input: Q
                  ? void 0
                  : (0, i.jsx)(o.I, {
                        size: "md",
                        query: _,
                        onChange: q,
                        onClear: z,
                        placeholder: X,
                        "aria-label": X,
                        autoFocus: !0,
                    }),
              listProps: b,
              actionBarInput: Q
                  ? void 0
                  : (0, i.jsx)(s.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: E.intl.formatToPlainString(w.default.yKyx41, { days: 7 }),
                    }),
              actions: [],
          });
}
n(673383);
