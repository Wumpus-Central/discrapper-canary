n.d(t, { Z: () => S }), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(215569),
    u = n(481060),
    d = n(777789),
    f = n(78839),
    p = n(709054),
    _ = n(388032),
    m = n(542886);
function h(e) {
    let { imageClass: t, children: n, error: i } = e;
    return (0, r.jsxs)("div", {
        className: m.content,
        children: [
            (0, r.jsx)("div", { className: o()(m.image, t) }),
            n,
            (0, r.jsx)(c.W, {
                children:
                    null != i
                        ? (0, r.jsx)(u.oXn, {
                              className: m.error,
                              children: (0, r.jsx)(s.M14, {
                                  type: "critical",
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
              className: m.pendingCancellation,
              children: [
                  (0, r.jsx)(u.Mgn, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: m.pendingCancellationIcon,
                  }),
                  (0, r.jsx)(u.Text, {
                      variant: "text-md/normal",
                      className: m.pendingCancellationMessage,
                      children: _.intl.format(_.t.SFpsCH, {
                          date: n.currentPeriodEnd,
                          canceledCount: t,
                      }),
                  }),
              ],
          });
};
function E(e) {
    let { imageClass: t, blurb: n, guild: i, warning: a, error: o, slotCount: s = 1, canceledCount: l = 0 } = e;
    return (0, r.jsxs)(h, {
        imageClass: t,
        error: o,
        children: [
            (0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                children: n,
            }),
            (0, r.jsx)(d.Z, {
                className: m.guildCard,
                guild: i,
                subscriptionChange: s,
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                children: a,
            }),
            l > 0 ? (0, r.jsx)(g, { canceledCount: l }) : null,
        ],
    });
}
function b(e) {
    var t, n;
    let { imageClass: a, blurb: o, fromGuilds: s, toGuild: l, error: c, slotCount: f = 1, canceledCount: E = 0 } = e,
        b = i.useRef(s),
        y = null == (t = b.current) ? void 0 : t.length,
        O =
            null == (n = b.current)
                ? void 0
                : n.reduce((e, t) => (e.hasOwnProperty(t.id) || (e[t.id] = []), e[t.id].push(t), e), {});
    return (0, r.jsxs)(h, {
        imageClass: a,
        error: c,
        children: [
            (0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                children: o,
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-xs/bold",
                className: m.transferGuildCardHeader,
                children: _.intl.format(_.t["5zQYEz"], { guildCount: null != y ? y : 0 }),
            }),
            null != O
                ? p.default.keys(O).map((e) =>
                      (0, r.jsx)(
                          d.Z,
                          {
                              className: m.transferFromGuildCard,
                              guild: O[e][0],
                              subscriptionChange: -1 * O[e].length,
                          },
                          e,
                      ),
                  )
                : null,
            (0, r.jsx)(u.Text, {
                variant: "text-xs/normal",
                className: m.transferGuildCardHeader,
                children: _.intl.format(_.t.ct6oxD, { slotCount: f }),
            }),
            (0, r.jsx)("div", {
                className: m.activeTransferGuildCardBorder,
                children: (0, r.jsx)(d.Z, {
                    className: m.transferToGuildCard,
                    guild: l,
                    subscriptionChange: null != s ? s.length : 1,
                }),
            }),
            E > 0 ? (0, r.jsx)(g, { canceledCount: E }) : null,
        ],
    });
}
function y(e) {
    let { confirmation: t, confirmationLabel: n, isModifyingSubscription: i, onConfirm: a, onCancel: o } = e;
    return (0, r.jsx)("div", {
        className: m.footer,
        children: (0, r.jsxs)(u.ButtonGroup, {
            direction: "horizontal-reverse",
            children: [
                (0, r.jsx)(u.Button, {
                    variant: "primary",
                    text: t,
                    onClick: a,
                    loading: i,
                    "aria-label": n,
                }),
                (0, r.jsx)(u.Button, {
                    variant: "secondary",
                    text: _.intl.string(_.t["ETE/oC"]),
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
            text: _.intl.string(_.t["ETE/oC"]),
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
            fromGuilds: p,
            toGuild: _,
            confirmation: m,
            confirmationLabel: h,
            isModifyingSubscription: g,
            onConfirm: y,
            onCancel: v,
            error: S,
        } = e,
        I = O(m, h, g, y, v),
        T = () =>
            f && null != _
                ? (0, r.jsx)(b, {
                      imageClass: null != o ? o : "",
                      blurb: a,
                      fromGuilds: p,
                      toGuild: _,
                      error: S,
                      slotCount: u,
                      canceledCount: d,
                  })
                : null != l
                  ? (0, r.jsx)(E, {
                        imageClass: null != o ? o : "",
                        blurb: a,
                        guild: l,
                        warning: c,
                        error: S,
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
            (0, r.jsx)(s.fef, { children: T() }),
            (0, r.jsx)(s.Go$, {
                actions: I,
                actionsFullWidth: !1,
            }),
        ],
    });
};
(v.ApplyBody = E), (v.TransferBody = b), (v.Footer = y);
let S = v;
