n.d(t, { M: () => x }), n(953529);
var i = n(951288),
    r = n(647438),
    l = n(286379),
    a = n(481060),
    o = n(87051),
    s = n(797614),
    c = n(681678),
    u = n(819557),
    d = n(138201),
    p = n(378298),
    h = n(359119),
    f = n(473092),
    m = n(177342),
    g = n(621600),
    b = n(276060),
    C = n(870991),
    y = n(981631),
    _ = n(134612),
    v = n(388032);
function x(e) {
    let { channelId: t, warningId: x, senderId: O } = e,
        j = (0, C.E4)(),
        E = r.useCallback(() => {
            (0, p.T)(t, [x]);
        }, [t, x]),
        S = (0, b.t)({ location: _.zr }),
        P = (e) => {
            o.Z.updateChannelOverrideSettings(null, t, { muted: !0 }, g.ZB.Muted),
                c.Z.showMuteSuccessToast(O, t),
                (0, f.qc)({
                    channelId: t,
                    warningId: x,
                    senderId: O,
                    warningType: h.pj.LIKELY_ATO,
                    cta: e,
                }),
                E();
        };
    return (r.useEffect(() => {
        S &&
            ((0, f.MC)(y.rMx.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: x,
                senderId: O,
                warningType: h.pj.LIKELY_ATO,
            }),
            s.Z.increment({ name: l.V.SAFETY_WARNING_VIEW }));
    }, [t, x, O, S]),
    S)
        ? (0, i.jsx)(m.Q, {
              channelId: t,
              warningId: x,
              senderId: O,
              warningType: h.pj.LIKELY_ATO,
              header: v.intl.string(v.t.R8UsiI),
              description: v.intl.string(v.t.lI8nQk),
              onDismiss: E,
              buttons: [
                  {
                      text: v.intl.string(v.t.tC1pvL),
                      variant: "primary",
                      onClick: () => {
                          (0, a.ZDy)(async () => {
                              let { default: e } = await n.e("59385").then(n.bind(n, 480884));
                              return (n) => {
                                  let { transitionState: r, onClose: l } = n;
                                  return (0, i.jsx)(e, {
                                      transitionState: r,
                                      onClose: l,
                                      channelId: t,
                                      warningId: x,
                                      senderId: O,
                                      description: v.intl.string(v.t["/uid3t"]),
                                      safetyTipRows: j.map((e, t) =>
                                          (0, i.jsx)(
                                              u.q,
                                              {
                                                  listType: "numbered",
                                                  index: t,
                                                  title: e.title,
                                                  description: e.description,
                                              },
                                              t,
                                          ),
                                      ),
                                      actionRows: [
                                          (0, i.jsx)(
                                              d.JZ,
                                              {
                                                  title: v.intl.string(v.t.ftIK2N),
                                                  description: v.intl.string(v.t.w2ve0t),
                                                  buttonText: v.intl.string(v.t.ftIK2N),
                                                  onButtonPress: () => {
                                                      P(f.NM.USER_MODAL_MUTE), l();
                                                  },
                                              },
                                              "likely-ato-mute",
                                          ),
                                      ],
                                      learnMore: (0, i.jsx)(a.P3F, {
                                          onClick: () =>
                                              (0, f.qc)({
                                                  channelId: t,
                                                  warningId: x,
                                                  senderId: O,
                                                  warningType: h.pj.LIKELY_ATO,
                                                  cta: f.NM.USER_MODAL_LEARN_MORE,
                                              }),
                                          children: (0, i.jsx)(a.Heading, {
                                              variant: "heading-sm/medium",
                                              color: "text-link",
                                              children: v.intl.format(v.t.UkH129, { learnMoreLink: C.D8 }),
                                          }),
                                      }),
                                  });
                              };
                          }),
                              (0, f.qc)({
                                  channelId: t,
                                  warningId: x,
                                  senderId: O,
                                  warningType: h.pj.LIKELY_ATO,
                                  cta: f.NM.OPEN_MORE_TIPS,
                              });
                      },
                  },
                  {
                      text: v.intl.string(v.t.ftIK2N),
                      onClick: () => P(f.NM.USER_BANNER_MUTE),
                  },
              ],
          })
        : null;
}
