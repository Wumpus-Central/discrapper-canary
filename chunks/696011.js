n.d(t, { Z: () => g }), n(388685);
var r = n(704215),
    i = n(147913),
    a = n(266454),
    o = n(633289),
    s = n(594190),
    l = n(581883),
    c = n(430824),
    u = n(164670),
    d = n(699955),
    f = n(594914),
    p = n(582113),
    _ = n(526761);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class h extends i.Z {
    constructor(...e) {
        super(...e),
            m(this, "_didAttemptToOpenModal", !1),
            m(this, "_didConnectionOpen", !1),
            m(this, "_didUserSettingsProtoLoad", !1),
            m(this, "_didGamesSeenLoad", !1),
            m(this, "actions", { POST_CONNECTION_OPEN: () => this._handlePostConnectionOpen() }),
            m(
                this,
                "stores",
                new Map()
                    .set(l.Z, () => this._handleUserSettingsProtoUpdate())
                    .set(s.ZP, () => this._handleGamesSeenUpdate())
                    .set(o.Z, () => this._handleApexExperimentUpdate()),
            ),
            m(this, "_handlePostConnectionOpen", () => {
                (this._didConnectionOpen = !0), this._handleShowAnnouncementModal();
            }),
            m(this, "_handleUserSettingsProtoUpdate", () => {
                (this._didUserSettingsProtoLoad = l.Z.hasLoaded(_.yP.PRELOADED_USER_SETTINGS)),
                    this._handleShowAnnouncementModal();
            }),
            m(this, "_handleGamesSeenUpdate", () => {
                (this._didGamesSeenLoad = s.ZP.isGamesSeenLoaded()), this._handleShowAnnouncementModal();
            }),
            m(this, "_handleApexExperimentUpdate", () => {
                this._handleShowAnnouncementModal();
            }),
            m(this, "_handleShowAnnouncementModal", () => {
                if (
                    !this._didAttemptToOpenModal &&
                    this._didConnectionOpen &&
                    this._didUserSettingsProtoLoad &&
                    this._didGamesSeenLoad &&
                    (0, d.ne)({ location: "social-layer-storefront-announcement-modal" }) &&
                    ((this._didAttemptToOpenModal = !0), !(0, a.zu)(r.z.GAME_SHOP_ANNOUNCEMENT_MODAL))
                ) {
                    if (null != c.Z.getGuild((0, u.ac)())) return void (0, f.b)();
                    for (let e of s.ZP.getGamesSeen(!1, !1)) if (null != e.id && p.RI.has(e.id)) return void (0, f.b)();
                }
            });
    }
}
let g = new h();
