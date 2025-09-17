n.d(t, { Z: () => A }), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(215569),
    c = n(257465),
    u = n(369585),
    d = n(103866),
    f = n(37148),
    _ = n(481060),
    p = n(777789),
    h = n(78839),
    m = n(709054),
    g = n(388032),
    E = n(76409);
function b(e) {
    let { imageClass: t, children: n, error: i, onDismissError: a } = e;
    return (0, r.jsxs)("div", {
        className: E.content,
        children: [
            (0, r.jsx)("div", { className: o()(E.image, t) }),
            n,
            (0, r.jsx)(l.W, {
                children:
                    null != i
                        ? (0, r.jsx)(_.oXn, {
                              className: E.error,
                              children: (0, r.jsx)(_.kzN, {
                                  onDismiss: a,
                                  children: i.message,
                              }),
                          })
                        : null,
            }),
        ],
    });
}
let y = (e) => {
    let { canceledCount: t } = e,
        n = (0, s.e7)([h.Z], () => h.Z.getPremiumTypeSubscription());
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: E.pendingCancellation,
              children: [
                  (0, r.jsx)(_.Mgn, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: E.pendingCancellationIcon,
                  }),
                  (0, r.jsx)(_.Text, {
                      variant: "text-md/normal",
                      className: E.pendingCancellationMessage,
                      children: g.intl.format(g.t.SFpsCA, {
                          date: n.currentPeriodEnd,
                          canceledCount: t,
                      }),
                  }),
              ],
          });
};
function O(e) {
    let {
        imageClass: t,
        blurb: n,
        guild: i,
        warning: a,
        error: o,
        onDismissError: s,
        slotCount: l = 1,
        canceledCount: c = 0,
    } = e;
    return (0, r.jsxs)(b, {
        imageClass: t,
        error: o,
        onDismissError: s,
        children: [
            (0, r.jsx)(_.Text, {
                variant: "text-md/normal",
                children: n,
            }),
            (0, r.jsx)(p.Z, {
                className: E.guildCard,
                guild: i,
                subscriptionChange: l,
            }),
            (0, r.jsx)(_.Text, {
                variant: "text-md/normal",
                children: a,
            }),
            c > 0 ? (0, r.jsx)(y, { canceledCount: c }) : null,
        ],
    });
}
function v(e) {
    var t, n;
    let {
            imageClass: a,
            blurb: o,
            fromGuilds: s,
            toGuild: l,
            error: c,
            onDismissError: u,
            slotCount: d = 1,
            canceledCount: f = 0,
        } = e,
        h = i.useRef(s),
        O = null == (t = h.current) ? void 0 : t.length,
        v =
            null == (n = h.current)
                ? void 0
                : n.reduce((e, t) => (e.hasOwnProperty(t.id) || (e[t.id] = []), e[t.id].push(t), e), {});
    return (0, r.jsxs)(b, {
        imageClass: a,
        error: c,
        onDismissError: u,
        children: [
            (0, r.jsx)(_.Text, {
                variant: "text-md/normal",
                children: o,
            }),
            (0, r.jsx)(_.Text, {
                variant: "text-xs/bold",
                className: E.transferGuildCardHeader,
                children: g.intl.format(g.t["5zQYEx"], { guildCount: O }),
            }),
            null != v
                ? m.default.keys(v).map((e) =>
                      (0, r.jsx)(
                          p.Z,
                          {
                              className: E.transferFromGuildCard,
                              guild: v[e][0],
                              subscriptionChange: -1 * v[e].length,
                          },
                          e,
                      ),
                  )
                : null,
            (0, r.jsx)(_.Text, {
                variant: "text-xs/normal",
                className: E.transferGuildCardHeader,
                children: g.intl.format(g.t.ct6oxM, { slotCount: d }),
            }),
            (0, r.jsx)("div", {
                className: E.activeTransferGuildCardBorder,
                children: (0, r.jsx)(p.Z, {
                    className: E.transferToGuildCard,
                    guild: l,
                    subscriptionChange: null != s ? s.length : 1,
                }),
            }),
            f > 0 ? (0, r.jsx)(y, { canceledCount: f }) : null,
        ],
    });
}
function I(e) {
    let { confirmation: t, confirmationLabel: n, isModifyingSubscription: i, onConfirm: a, onCancel: o } = e;
    return (0, r.jsx)("div", {
        className: E.footer,
        children: (0, r.jsxs)(_.hE2, {
            direction: "horizontal-reverse",
            children: [
                (0, r.jsx)(_.zxk, {
                    variant: "primary",
                    text: t,
                    onClick: a,
                    loading: i,
                    "aria-label": n,
                }),
                (0, r.jsx)(_.zxk, {
                    variant: "secondary",
                    text: g.intl.string(g.t["ETE/oK"]),
                    onClick: o,
                    disabled: i,
                }),
            ],
        }),
    });
}
function T(e, t, n, r, i) {
    return [
        {
            variant: "secondary",
            text: g.intl.string(g.t["ETE/oK"]),
            onClick: i,
            disabled: n,
        },
        {
            variant: "primary",
            text: e,
            onClick: r,
            loading: n,
            "aria-label": t,
        },
    ];
}
let S = (e) => {
    let {
            transitionState: t,
            onClose: n,
            title: i,
            subtitle: a,
            imageClass: o,
            guild: s,
            warning: l,
            slotCount: _ = 1,
            canceledCount: p = 0,
            isTransfer: h = !1,
            fromGuilds: m,
            toGuild: g,
            confirmation: E,
            confirmationLabel: b,
            isModifyingSubscription: y,
            onConfirm: I,
            onCancel: S,
            error: A,
            onDismissError: C,
        } = e,
        N = T(E, b, y, I, S),
        R = () =>
            h && null != g
                ? (0, r.jsx)(v, {
                      imageClass: null != o ? o : "",
                      blurb: a,
                      fromGuilds: m,
                      toGuild: g,
                      error: A,
                      onDismissError: C,
                      slotCount: _,
                      canceledCount: p,
                  })
                : null != s
                  ? (0, r.jsx)(O, {
                        imageClass: null != o ? o : "",
                        blurb: a,
                        guild: s,
                        warning: l,
                        error: A,
                        onDismissError: C,
                        slotCount: _,
                        canceledCount: p,
                    })
                  : null;
    return (0, r.jsxs)(c.I, {
        transitionState: t,
        onClose: n,
        size: "sm",
        children: [
            (0, r.jsx)(f.x, { title: i }),
            (0, r.jsx)(d.f, { children: R() }),
            (0, r.jsx)(u.G, {
                actions: N,
                actionsFullWidth: !1,
            }),
        ],
    });
};
(S.ApplyBody = O), (S.TransferBody = v), (S.Footer = I);
let A = S;
