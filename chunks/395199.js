n.d(t, { Z: () => I }), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(215569),
    u = n(481060),
    d = n(777789),
    f = n(78839),
    _ = n(709054),
    p = n(388032),
    h = n(76409);
function m(e) {
    let { imageClass: t, children: n, error: i, onDismissError: a } = e;
    return (0, r.jsxs)("div", {
        className: h.content,
        children: [
            (0, r.jsx)("div", { className: o()(h.image, t) }),
            n,
            (0, r.jsx)(c.W, {
                children:
                    null != i
                        ? (0, r.jsx)(u.oXn, {
                              className: h.error,
                              children: (0, r.jsx)(u.kzN, {
                                  onDismiss: a,
                                  children: i.message,
                              }),
                          })
                        : null,
            }),
        ],
    });
}
let g = (e) => {
    let { canceledCount: t } = e,
        n = (0, l.e7)([f.Z], () => f.Z.getPremiumTypeSubscription());
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: h.pendingCancellation,
              children: [
                  (0, r.jsx)(u.Mgn, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: h.pendingCancellationIcon,
                  }),
                  (0, r.jsx)(u.Text, {
                      variant: "text-md/normal",
                      className: h.pendingCancellationMessage,
                      children: p.intl.format(p.t.SFpsCA, {
                          date: n.currentPeriodEnd,
                          canceledCount: t,
                      }),
                  }),
              ],
          });
};
function E(e) {
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
    return (0, r.jsxs)(m, {
        imageClass: t,
        error: o,
        onDismissError: s,
        children: [
            (0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                children: n,
            }),
            (0, r.jsx)(d.Z, {
                className: h.guildCard,
                guild: i,
                subscriptionChange: l,
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                children: a,
            }),
            c > 0 ? (0, r.jsx)(g, { canceledCount: c }) : null,
        ],
    });
}
function b(e) {
    var t, n;
    let {
            imageClass: a,
            blurb: o,
            fromGuilds: s,
            toGuild: l,
            error: c,
            onDismissError: f,
            slotCount: E = 1,
            canceledCount: b = 0,
        } = e,
        y = i.useRef(s),
        O = null == (t = y.current) ? void 0 : t.length,
        v =
            null == (n = y.current)
                ? void 0
                : n.reduce((e, t) => (e.hasOwnProperty(t.id) || (e[t.id] = []), e[t.id].push(t), e), {});
    return (0, r.jsxs)(m, {
        imageClass: a,
        error: c,
        onDismissError: f,
        children: [
            (0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                children: o,
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-xs/bold",
                className: h.transferGuildCardHeader,
                children: p.intl.format(p.t["5zQYEx"], { guildCount: O }),
            }),
            null != v
                ? _.default.keys(v).map((e) =>
                      (0, r.jsx)(
                          d.Z,
                          {
                              className: h.transferFromGuildCard,
                              guild: v[e][0],
                              subscriptionChange: -1 * v[e].length,
                          },
                          e,
                      ),
                  )
                : null,
            (0, r.jsx)(u.Text, {
                variant: "text-xs/normal",
                className: h.transferGuildCardHeader,
                children: p.intl.format(p.t.ct6oxM, { slotCount: E }),
            }),
            (0, r.jsx)("div", {
                className: h.activeTransferGuildCardBorder,
                children: (0, r.jsx)(d.Z, {
                    className: h.transferToGuildCard,
                    guild: l,
                    subscriptionChange: null != s ? s.length : 1,
                }),
            }),
            b > 0 ? (0, r.jsx)(g, { canceledCount: b }) : null,
        ],
    });
}
function y(e) {
    let { confirmation: t, confirmationLabel: n, isModifyingSubscription: i, onConfirm: a, onCancel: o } = e;
    return (0, r.jsx)("div", {
        className: h.footer,
        children: (0, r.jsxs)(u.hE2, {
            direction: "horizontal-reverse",
            children: [
                (0, r.jsx)(u.zxk, {
                    variant: "primary",
                    text: t,
                    onClick: a,
                    loading: i,
                    "aria-label": n,
                }),
                (0, r.jsx)(u.zxk, {
                    variant: "secondary",
                    text: p.intl.string(p.t["ETE/oK"]),
                    onClick: o,
                    disabled: i,
                }),
            ],
        }),
    });
}
function O(e, t, n, r, i) {
    return [
        {
            variant: "secondary",
            text: p.intl.string(p.t["ETE/oK"]),
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
let v = (e) => {
    let {
            transitionState: t,
            onClose: n,
            title: i,
            subtitle: a,
            imageClass: o,
            guild: l,
            warning: c,
            slotCount: u = 1,
            canceledCount: d = 0,
            isTransfer: f = !1,
            fromGuilds: _,
            toGuild: p,
            confirmation: h,
            confirmationLabel: m,
            isModifyingSubscription: g,
            onConfirm: y,
            onCancel: v,
            error: I,
            onDismissError: T,
        } = e,
        S = O(h, m, g, y, v),
        A = () =>
            f && null != p
                ? (0, r.jsx)(b, {
                      imageClass: null != o ? o : "",
                      blurb: a,
                      fromGuilds: _,
                      toGuild: p,
                      error: I,
                      onDismissError: T,
                      slotCount: u,
                      canceledCount: d,
                  })
                : null != l
                  ? (0, r.jsx)(E, {
                        imageClass: null != o ? o : "",
                        blurb: a,
                        guild: l,
                        warning: c,
                        error: I,
                        onDismissError: T,
                        slotCount: u,
                        canceledCount: d,
                    })
                  : null;
    return (0, r.jsxs)(s.IX, {
        transitionState: t,
        onClose: n,
        size: "sm",
        children: [
            (0, r.jsx)(s.xBx, { title: i }),
            (0, r.jsx)(s.fef, { children: A() }),
            (0, r.jsx)(s.Go$, {
                actions: S,
                actionsFullWidth: !1,
            }),
        ],
    });
};
(v.ApplyBody = E), (v.TransferBody = b), (v.Footer = y);
let I = v;
