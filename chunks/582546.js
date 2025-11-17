n.d(t, { Z: () => m }), n(388685);
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(26033),
    s = n(740605),
    l = n(180335),
    c = n(768419),
    u = n(313789),
    d = n(518596),
    f = n(594174),
    _ = n(981631),
    p = n(616922),
    h = n(388032);
function m(e) {
    var t;
    let { user: n, entry: m, display: g, onAction: E, onClose: b } = e,
        y = (0, i.e7)([f.default], () => {
            var e;
            return (null == (e = f.default.getCurrentUser()) ? void 0 : e.id) === n.id;
        }),
        O = (0, i.e7)([c.Z], () => c.Z.hasConnectedAccount());
    if ("recent" !== g || !(0, l.AZ)(m)) return null;
    if (!O)
        return (0, r.jsx)(a.sNh, {
            id: "connect-spotify",
            label: h.intl.formatToPlainString(h.t.XWSHTb, { platform: p.ai }),
            action: () => {
                null == E || E({ action: "PRESS_CONNECT_SPOTIFY_MENU_ITEM" }),
                    (0, d.openUserSettings)(u.n.CONNECTIONS_PANEL, { section: _.oAB.CONNECTIONS }),
                    null == b || b();
            },
        });
    if (y) return null;
    let v = (0, o.dU)(m) ? (null == (t = m.extra.entries[0]) ? void 0 : t.media) : m.extra.media;
    return null == v
        ? null
        : (0, r.jsx)(a.sNh, {
              id: "play-on-spotify",
              label: h.intl.string(h.t.rRffNz),
              action: () => {
                  null == E || E({ action: "PRESS_PLAY_ON_SPOTIFY_MENU_ITEM" }), (0, s.o)(p.Hw.TRACK, v.external_id);
              },
          });
}
