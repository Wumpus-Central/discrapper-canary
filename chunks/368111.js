n.d(t, { Z: () => o });
var r = n(81825);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class o extends r.Z {
    toString() {
        return this.name;
    }
    constructor(e) {
        super(), i(this, 'id', void 0), i(this, 'type', void 0), i(this, 'name', void 0), i(this, 'revoked', void 0), i(this, 'integrations', void 0), i(this, 'visibility', void 0), i(this, 'friendSync', void 0), i(this, 'verified', void 0), i(this, 'showActivity', void 0), i(this, 'twoWayLink', void 0), i(this, 'accessToken', void 0), i(this, 'metadata', void 0), i(this, 'metadataVisibility', void 0), (this.id = e.id), (this.type = e.type), (this.name = e.name), (this.revoked = e.revoked || !1), (this.integrations = e.integrations || []), (this.visibility = e.visibility || 0), (this.friendSync = e.friend_sync || !1), (this.showActivity = e.show_activity || !1), (this.verified = e.verified || !1), (this.accessToken = e.access_token || null), (this.twoWayLink = e.two_way_link || !1), (this.metadata = e.metadata || null), (this.metadataVisibility = e.metadata_visibility || 0);
    }
}
