n.d(t, { Z: () => d }), n(388685);
var r = n(592125),
    i = n(862825),
    l = n(495362),
    a = n(981631),
    o = n(388032);
function s(e, t, n) {
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
function c(e) {
    return e.type === i.sz.PREFIX;
}
function u(e) {
    return e.type === i.sz.COMPLETE;
}
class d {
    markChanged() {
        let e = new Set(),
            t = new Set();
        this.tags.forEach((n) => {
            e.add(n.text), u(n) && null != n.channelId && t.add(n.channelId);
        }),
            (this.ids = e),
            (this.channelIds = t),
            this.version++;
    }
    mergeTag(e, t) {
        let n = {
            type: i.sz.COMPLETE,
            text: ''.concat(e.text, ' ').concat(t.text),
            location: e.location,
            searchTokenType: e.searchTokenType,
            channelId: t.channelId,
            userId: t.userId
        };
        this.tags = [...this.tags.filter((n) => n !== e && n !== t), n];
    }
    replaceTag(e, t) {
        this.tags = this.tags.map((n) => (n === e ? t : n));
    }
    exists(e) {
        return this.ids.has(e.text);
    }
    getChannelIds() {
        return this.channelIds;
    }
    getUserIds(e) {
        let t = new Set();
        return (
            this.tags.forEach((n) => {
                if (!u(n)) return;
                let { userId: r } = n;
                n.searchTokenType === e && null != r && t.add(r);
            }),
            t
        );
    }
    isChannelTagsOnly() {
        return this.tags.filter(u).every((e) => {
            let { channelId: t } = e;
            return null != t;
        });
    }
    hasUserAddedTags() {
        return this.tags.filter(u).some((e) => e.location !== l.Z$.CLIENT_AUTO_ADD);
    }
    isEmpty() {
        return 0 === this.tags.length;
    }
    getPrefixTag() {
        let e = this.tags[this.tags.length - 1];
        if (null != e) return c(e) ? e : void 0;
    }
    get() {
        return this.tags;
    }
    set(e) {
        (this.tags = e), this.markChanged();
    }
    getQueryString() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = this.tags.filter((t) => !c(t) || e);
        return 0 === t.length ? '' : ''.concat(t.map((e) => e.text).join(' '));
    }
    add(e) {
        if (this.exists(e)) return;
        let t = this.tags[this.tags.length - 1];
        c(e) && null != t && c(t) ? this.replaceTag(t, e) : e.type === i.sz.ANSWER && null != t && c(t) ? this.mergeTag(t, e) : (c(e) || u(e)) && (this.tags = [...this.tags, e]), this.markChanged();
    }
    removeAnyPrefixTags() {
        (this.tags = this.tags.filter((e) => !c(e))), this.markChanged();
    }
    removeAtIndex(e) {
        let t = this.tags[e];
        (this.tags = this.tags.filter((e) => e !== t)), this.markChanged();
    }
    reset() {
        (this.tags = this.defaultTags), this.markChanged();
    }
    constructor(e) {
        s(this, 'tags', void 0),
            s(this, 'defaultTags', void 0),
            s(this, 'ids', new Set()),
            s(this, 'channelIds', new Set()),
            s(this, 'version', 0),
            (this.defaultTags = (function (e) {
                if (e.type !== a.aib.GUILD_CHANNEL) return [];
                {
                    var t;
                    let n = null == (t = r.Z.getChannel(e.channelId)) ? void 0 : t.name;
                    return [
                        {
                            type: i.sz.COMPLETE,
                            searchTokenType: a.dCx.FILTER_IN,
                            text: ''.concat(o.intl.string(o.t.WNpFHR), ': ').concat(n),
                            channelId: e.channelId,
                            location: l.Z$.CLIENT_AUTO_ADD
                        }
                    ];
                }
            })(e)),
            (this.tags = this.defaultTags),
            this.markChanged();
    }
}
