"use strict";
n.d(t, { A: () => s });
var r = n(812729),
    i = n.n(r);
class s {
    alwaysUpdateState;
    dirty = !1;
    state = this.getInitialState();
    constructor(e = !0) {
        this.alwaysUpdateState = e;
    }
    shouldCommit() {
        return !0;
    }
    setState(e) {
        this.state = { ...this.state, ...e };
    }
    getState() {
        return this.state;
    }
    reset() {
        (this.dirty = !1), (this.state = this.getInitialState());
    }
    update() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.getNextState({ ...this.state, ...e });
        if (t) this.dirty = !i()(n, this.getInitialState());
        else for (let e of Object.keys(n)) this.dirty = this.dirty || !i()(this.state[e], n[e]);
        let r = this.dirty && this.shouldCommit();
        return (
            (r || this.alwaysUpdateState) && (this.state = n),
            !!r && ((this.dirty = !1), this.didCommit(this.state), !0)
        );
    }
    forceUpdate() {
        (this.dirty = !1), this.didCommit(this.state);
    }
}
