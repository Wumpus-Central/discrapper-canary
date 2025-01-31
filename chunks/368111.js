n.d(t, { Z: () => a });
var i = n(81825);
function r(e, t, n) {
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
class a extends i.Z {
    toString() {
        return this.name;
    }
    constructor(e) {
        super(), r(this, 'id', void 0), r(this, 'type', void 0), r(this, 'name', void 0), r(this, 'revoked', void 0), r(this, 'integrations', void 0), r(this, 'visibility', void 0), r(this, 'friendSync', void 0), r(this, 'verified', void 0), r(this, 'showActivity', void 0), r(this, 'twoWayLink', void 0), r(this, 'accessToken', void 0), r(this, 'metadata', void 0), r(this, 'metadataVisibility', void 0), (this.id = e.id), (this.type = e.type), (this.name = e.name), (this.revoked = e.revoked || !1), (this.integrations = e.integrations || []), (this.visibility = e.visibility || 0), (this.friendSync = e.friend_sync || !1), (this.showActivity = e.show_activity || !1), (this.verified = e.verified || !1), (this.accessToken = e.access_token || null), (this.twoWayLink = e.two_way_link || !1), (this.metadata = e.metadata || null), (this.metadataVisibility = e.metadata_visibility || 0);
    }
}
