n.d(t, { Z: () => b });
var i = n(951288),
    l = n(647438),
    r = n(442837),
    a = n(481060),
    o = n(475179),
    s = n(872810),
    u = n(788983),
    d = n(629049),
    c = n(358221),
    g = n(354459),
    f = n(388032);
function b(e, t) {
    let { enabled: n } = d.Z.useConfig({ location: "useCallTilePopoutItem" }),
        b = (0, r.e7)([c.Z], () => c.Z.getParticipant(e, t)),
        Z = (0, r.e7)([c.Z], () => c.Z.isParticipantPoppedOut(e, t)),
        p = l.useCallback(() => {
            null != b &&
                ((0, g._5)(b) && (0, s.rn)(b.stream, { forceMultiple: !0 }),
                o.Z.popoutParticipant(e, b.id),
                u.fT(e, b.id));
        }, [b, e]);
    return Z || null == b || !n || b.type === g.fO.ACTIVITY
        ? null
        : (0, i.jsx)(a.sNh, {
              id: "call-tile-popout",
              label: (0, g._5)(b)
                  ? f.intl.string(f.t.Cm4aDQ)
                  : null != b.streamId
                    ? f.intl.string(f.t["8Xyas9"])
                    : f.intl.string(f.t.ifpl2s),
              action: p,
              icon: a.rgF,
          });
}
