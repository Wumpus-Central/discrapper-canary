n.d(t, { Z: () => f }), n(781311), n(388685);
var r = n(73800),
    i = n(94171),
    l = n(972959),
    a = n(378763),
    o = n(416638),
    s = n(862825);
function c(e, t, n) {
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
class u {
    constructor(e) {
        var t = this;
        c(this, 'textInputValue', void 0),
            c(this, 'textInputChangedFromInput', void 0),
            c(this, 'searchResultsQuery', void 0),
            c(this, 'tagsManager', void 0),
            c(this, 'getQueryString', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = t.tagsManager.getQueryString(e);
                return 0 !== n.length ? ''.concat(n, ' ').concat(t.textInputValue) : t.textInputValue;
            }),
            c(this, 'getTextInputValue', () => this.textInputValue),
            c(this, 'setTextInputValue', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                (t.textInputValue = e), (t.textInputChangedFromInput = n);
            }),
            c(this, 'isInitialSearchQuery', () => 0 === this.textInputValue.trim().length && !this.tagsManager.hasUserAddedTags()),
            c(this, 'getSearchResultsQuery', () => this.searchResultsQuery),
            c(this, 'setSearchResultsQuery', (e) => {
                this.searchResultsQuery = e;
            }),
            c(this, 'isTextInputValueEmpty', () => 0 === this.textInputValue.trim().length),
            c(this, 'getTextValueChangedFromInput', () => this.textInputChangedFromInput),
            c(this, 'hasUserAddedTags', () => this.tagsManager.hasUserAddedTags()),
            c(this, 'getTags', () => this.tagsManager.get()),
            c(this, 'getPrefixTag', () => this.tagsManager.getPrefixTag()),
            c(this, 'isAutocompleteVisible', () => null != this.getPrefixTag()),
            c(this, 'setTags', (e) => {
                this.tagsManager.set(e);
            }),
            c(this, 'addTag', (e) => {
                this.tagsManager.add(e);
            }),
            c(this, 'removeTag', (e) => {
                this.tagsManager.removeAtIndex(e);
            }),
            c(this, 'removePrefixTags', () => {
                this.tagsManager.removeAnyPrefixTags();
            }),
            c(this, 'getChannelIds', () => this.tagsManager.getChannelIds()),
            c(this, 'getUserIds', (e) => this.tagsManager.getUserIds(e)),
            c(this, 'isTagsEmpty', () => this.tagsManager.isEmpty()),
            c(this, 'reset', () => {
                (this.textInputValue = s.tY), (this.textInputChangedFromInput = !1), (this.searchResultsQuery = s.tY), this.tagsManager.reset();
            }),
            (this.textInputValue = s.tY),
            (this.textInputChangedFromInput = !1),
            (this.searchResultsQuery = s.tY),
            (this.tagsManager = new a.Z(e));
    }
}
let d = (0, l.H)(() => ({ states: new Map() }));
function p(e, t) {
    return e === t;
}
function m(e, t, n, r) {
    var l, a;
    return d.subscribe(
        (n) => {
            let { states: r } = n,
                i = (0, o.Tm)(e),
                l = r.get(i);
            return null != l ? t(l) : null;
        },
        n,
        {
            equalityFn: null != (l = null == r ? void 0 : r.equalityFn) ? l : i.X,
            fireImmediately: null != (a = null == r ? void 0 : r.fireImmediately) && a
        }
    );
}
let f = {
    useState: function (e, t) {
        let n = r.useCallback(
            (n) => {
                var r;
                let { states: i } = n,
                    l = (0, o.Tm)(e);
                return t(null != (r = i.get(l)) ? r : new u(e));
            },
            [e, t]
        );
        return d.useState(n, p);
    },
    getState: function (e, t) {
        var n;
        let r = (0, o.Tm)(e);
        return t(
            null !=
                (n = d
                    .getState((e) => {
                        let { states: t } = e;
                        return t;
                    })
                    .get(r))
                ? n
                : new u(e)
        );
    },
    setState: function (e, t) {
        var n;
        let r = d.getState((e) => {
                let { states: t } = e;
                return t;
            }),
            i = (0, o.Tm)(e),
            l = null != (n = r.get(i)) ? n : new u(e);
        t(l);
        let a = new Map(r);
        a.set(i, l), d.setState({ states: a });
    },
    deleteState: function (e) {
        let t = d.getState((e) => {
                let { states: t } = e;
                return t;
            }),
            n = (0, o.Tm)(e);
        if (!t.has(n)) return;
        let r = new Map(t);
        r.delete(n), d.setState({ states: r });
    },
    subscribeState: m,
    subscribeTextInputValue: function (e, t, n) {
        return m(
            e,
            (e) => ({
                textInputValue: e.getTextInputValue(),
                textInputChangedFromInput: e.getTextValueChangedFromInput()
            }),
            (e, n) => {
                null != e && t(e.textInputValue, null == n ? void 0 : n.textInputValue, e.textInputChangedFromInput);
            },
            n
        );
    }
};
