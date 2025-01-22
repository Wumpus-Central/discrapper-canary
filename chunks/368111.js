r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(81825);
function a(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class o extends i.Z {
    toString() {
        return this.name;
    }
    constructor(e) {
        super(), a(this, 'id', void 0), a(this, 'type', void 0), a(this, 'name', void 0), a(this, 'revoked', void 0), a(this, 'integrations', void 0), a(this, 'visibility', void 0), a(this, 'friendSync', void 0), a(this, 'verified', void 0), a(this, 'showActivity', void 0), a(this, 'twoWayLink', void 0), a(this, 'accessToken', void 0), a(this, 'metadata', void 0), a(this, 'metadataVisibility', void 0), (this.id = e.id), (this.type = e.type), (this.name = e.name), (this.revoked = e.revoked || !1), (this.integrations = e.integrations || []), (this.visibility = e.visibility || 0), (this.friendSync = e.friend_sync || !1), (this.showActivity = e.show_activity || !1), (this.verified = e.verified || !1), (this.accessToken = e.access_token || null), (this.twoWayLink = e.two_way_link || !1), (this.metadata = e.metadata || null), (this.metadataVisibility = e.metadata_visibility || 0);
    }
}
