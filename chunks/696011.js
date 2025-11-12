n.d(t, { Z: () => g }), n(388685);
var r = n(704215),
    i = n(147913),
    a = n(266454),
    o = n(633289),
    s = n(594190),
    l = n(581883),
    c = n(430824),
    u = n(699955),
    d = n(594914),
    f = n(582113),
    _ = n(526761);
function p(e, t, n) {
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
let h = new Set([f.t9, f.h4]);
class m extends i.Z {
    constructor(...e) {
        super(...e),
            p(this, "_didAttemptToOpenModal", !1),
            p(this, "_didConnectionOpen", !1),
            p(this, "_didUserSettingsProtoLoad", !1),
            p(this, "_didGamesSeenLoad", !1),
            p(this, "actions", { POST_CONNECTION_OPEN: () => this._handlePostConnectionOpen() }),
            p(
                this,
                "stores",
                new Map()
                    .set(l.Z, () => this._handleUserSettingsProtoUpdate())
                    .set(s.ZP, () => this._handleGamesSeenUpdate())
                    .set(o.Z, () => this._handleApexExperimentUpdate()),
            ),
            p(this, "_handlePostConnectionOpen", () => {
                (this._didConnectionOpen = !0), this._handleShowAnnouncementModal();
            }),
            p(this, "_handleUserSettingsProtoUpdate", () => {
                (this._didUserSettingsProtoLoad = l.Z.hasLoaded(_.yP.PRELOADED_USER_SETTINGS)),
                    this._handleShowAnnouncementModal();
            }),
            p(this, "_handleGamesSeenUpdate", () => {
                (this._didGamesSeenLoad = s.ZP.isGamesSeenLoaded()), this._handleShowAnnouncementModal();
            }),
            p(this, "_handleApexExperimentUpdate", () => {
                this._handleShowAnnouncementModal();
            }),
            p(this, "_handleShowAnnouncementModal", () => {
                if (
                    !this._didAttemptToOpenModal &&
                    this._didConnectionOpen &&
                    this._didUserSettingsProtoLoad &&
                    this._didGamesSeenLoad &&
                    (0, u.n)({ location: "social-layer-storefront-announcement-modal" }) &&
                    ((this._didAttemptToOpenModal = !0), !(0, a.zu)(r.z.GAME_SHOP_ANNOUNCEMENT_MODAL))
                ) {
                    if (null != c.Z.getGuild(f.ON)) return void (0, d.b)();
                    for (let e of s.ZP.getGamesSeen(!1, !1)) if (null != e.id && h.has(e.id)) return void (0, d.b)();
                }
            });
    }
}
let g = new m();
