n.d(t, { A: () => o });
var i = n(615300);
class l {
    animation;
    constructor(e) {
        this.animation = e;
    }
    start() {
        return new Promise((e) => {
            this.animation.start(() => {
                e();
            });
        });
    }
    stop() {
        this.animation.stop();
    }
}
class s {
    animations;
    constructor(e) {
        this.animations = e;
    }
    _map(e) {
        return this.animations.map(e);
    }
    start() {
        return new Promise((e) => Promise.all(this._map((e) => e.start())).then(() => e()));
    }
    stop() {
        this._map((e) => e.stop());
    }
}
class r {
    animations;
    stopped = !1;
    constructor(e) {
        this.animations = e;
    }
    async start() {
        for (let e of ((this.stopped = !1), this.animations)) {
            if (this.stopped) return;
            await e.start();
        }
    }
    stop() {
        (this.stopped = !0), this.animations.map((e) => e.stop());
    }
}
function a(e, t, n) {
    return new l(n(e, { ...t }));
}
let o = {
    ...i.A,
    timing: function (e, t) {
        return a(e, t, i.A.timing);
    },
    spring: function (e, t) {
        return a(e, t, i.A.spring);
    },
    parallel: function (e) {
        return new s(e);
    },
    sequence: function (e) {
        return new r(e);
    },
};
