n.d(t, { F: () => a }), n(415506);
var r = n(153102),
    i = n(52165);
function o(e, t, n) {
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
class a {
    attach(e) {
        let { stores: t, libDiscoreContextId: n } = this;
        t.forEach((t, n) => {
            if (null == t) throw Error(''.concat(e, " tried to load a non-existent store. Either it isn't defined or there is a circular dependency. Loaded ").concat(n, ' stores before error.'));
            t.addReactChangeListener(this.handleStoreChange);
        }),
            void 0 !== n && (0, i.gb)(n, this.handleStoreChange);
    }
    detach() {
        let { stores: e, libDiscoreContextId: t } = this;
        e.forEach((e) => e.removeReactChangeListener(this.handleStoreChange)), void 0 !== t && (0, i.iB)(t);
    }
    constructor(e, t, n) {
        o(this, 'stores', void 0),
            o(this, 'libDiscoreContextId', void 0),
            o(this, 'changeCallback', void 0),
            o(this, 'storeVersionHandled', void 0),
            o(this, 'handleStoreChange', () => {
                let e = r.Z.getChangeSentinel();
                this.storeVersionHandled !== e && (this.changeCallback(), (this.storeVersionHandled = e));
            }),
            (this.stores = e),
            (this.libDiscoreContextId = n),
            (this.changeCallback = t);
    }
}
