"use strict";
n.d(t, { A: () => p });
var r = n(735438),
    i = n.n(r),
    s = n(73153),
    a = n(272355),
    o = n(133636),
    l = n(346640),
    u = n(652215),
    c = n(75772),
    d = n(985018);
function _(e) {
    if (null == e) return d.intl.string(c.default["8QHt5L"]);
    if (e.type === l.$p.GATHERING) return d.intl.string(c.default.sm1QR9);
    if (e.type === l.$p.CRAFTING) {
        let t = l.k[e.resource].name;
        return d.intl.formatToPlainString(c.default.rAdYTB, { resource: d.intl.string(t) });
    }
    if (e.type === l.$p.COMBAT)
        switch (e.combatClass) {
            case l.$6.HEALER:
                return d.intl.string(c.default.P4wHgh);
            case l.$6.TANK:
                return d.intl.string(c.default["29V9vF"]);
            case l.$6.DPS:
                return d.intl.string(c.default.aArXva);
        }
    return d.intl.string(c.default["8QHt5L"]);
}
class f extends a.A {
    startingTime = 0;
    loaded = !1;
    _initialize() {
        (this.loaded = !0), (this.startingTime = Date.now()), o.A.addChangeListener(this._onStoreChange);
    }
    _terminate() {
        (this.loaded = !1),
            o.A.removeChangeListener(this._onStoreChange),
            s.h.dispatch({ type: "LOCAL_ACTIVITY_UPDATE", socketId: "gorilla-game", activity: void 0 });
    }
    _onStoreChange = i().debounce(
        () => {
            if (!this.loaded) return;
            let e = o.A.getCombatClass(),
                t = {
                    application_id: l.L8,
                    type: u.$pd.PLAYING,
                    name: "Last Meadow ONLINE",
                    details:
                        null != e
                            ? d.intl.formatToPlainString(d.t.Sq9xJ7, { game: d.intl.string(l.P6[e].name) })
                            : d.intl.string(d.t["ahzZr+"]),
                    state: _(o.A.getLastAction()),
                    timestamps: { start: this.startingTime },
                };
            s.h.dispatch({ type: "LOCAL_ACTIVITY_UPDATE", socketId: "gorilla-game", activity: t });
        },
        5e3,
        { maxWait: 5e3 },
    );
}
let p = new f();
