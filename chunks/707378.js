n.d(t, {
    A: () => m,
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(308528),
    o = n(313369),
    d = n(267102),
    s = n(964404),
    u = n(961350),
    c = n(734057),
    A = n(994500),
    b = n(309010),
    g = n(652215),
    f = n(985018);

function m(e) {
    let { user: t, context: m, joinCallVideo: O, id: p, onCall: y } = e,
        E = (0, d.aL)(),
        v = (0, i.bG)([u.default], () => u.default.getId() === t.id),
        h = (0, i.bG)([A.A], () => A.A.isBlocked(t.id)),
        j = (0, i.bG)([b.A, c.A], () => b.A.getVoiceChannelId() === c.A.getDMFromUserId(t.id)),
        { copyVariant: x } = o.o.useConfig({
            location: "useCallUserItem",
        });
    if (v || m === g.BRT.POPOUT || j || t.bot || t.isProvisional) return null;
    let S = () => {
            null == y || y(),
                a.A.openPrivateChannel({
                    recipientIds: t.id,
                    joinCall: !0,
                    joinCallVideo: O,
                }),
                E.dispatch(g.jej.POPOUT_CLOSE),
                (0, r.s7G)();
        },
        M = !s.Ay.disableCallUserConfirmationPrompt;
    return (0, l.jsx)(r.Drp, {
        id: null != p ? p : "call",
        label: "control" !== x ? f.intl.string(f.t["ZeP+kK"]) : f.intl.string(f.t.JJogjm),
        action: M
            ? () => {
                  (0, r.mMO)(async () => {
                      let { default: e } = await n.e("19106").then(n.bind(n, 279673));
                      return (t) =>
                          (0, l.jsx)(
                              e,
                              (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          l = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (l = l.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          l.forEach(function (t) {
                                              var l;
                                              (l = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: l,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = l);
                                          });
                                  }
                                  return e;
                              })(
                                  {
                                      onSubmit: S,
                                  },
                                  t,
                              ),
                          );
                  });
              }
            : S,
        disabled: h,
    });
}
