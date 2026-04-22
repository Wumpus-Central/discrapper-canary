e.d(n, { A: () => _ });
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(378570),
    a = e(323443),
    s = e(233993),
    o = e(82149),
    c = e(734057),
    u = e(576705),
    d = e(977997),
    A = e(939496),
    x = e(993401),
    p = e(996988),
    f = e(985018);
function _(t) {
    let { activity: n, onAction: e, onClose: _ } = t,
        { themeType: m } = (0, A.E)(),
        E = m === p.d.MODAL_V2,
        { channelId: T, guildId: g } = (0, o.UW)(n) ?? {},
        N = (0, l.bG)([d.A], () => null != T && d.A.isInChannel(T), [T]),
        C = (0, l.bG)([c.A], () => (null != T ? c.A.getChannel(T) : null), [T]),
        I = (0, l.bG)([u.A], () => null != C && u.A.can(s.Gk, C), [C]);
    return (0, o.Cy)(n) && I && null != g && null != T
        ? (0, i.jsx)(x.FD, {
              text: f.intl.string(f.t.ZYO5OK),
              fullWidth: !E,
              disabled: N,
              onClick: (t) => {
                  t.stopPropagation(),
                      e?.({ action: "PRESS_STAGE_CHANNEL_LISTEN_BUTTON" }),
                      a.CH(g, T),
                      (0, r.iN)(T),
                      _?.();
              },
          })
        : null;
}
