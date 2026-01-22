n.d(t, {
    A: () => l,
    C: () => o,
}),
    n(228524);
var r = n(575593),
    i = n(149807);

function a(e, t, n) {
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

function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
let o = (e) => e instanceof l;
class l extends i.A {
    static fromServer(e) {
        return new l(s({}, super.fromServer(e), e));
    }
    constructor(e) {
        super(e),
            a(this, "title", void 0),
            a(this, "description", void 0),
            a(this, "accessibilityLabel", void 0),
            a(this, "reducedMotionSrc", void 0),
            a(this, "thumbnailPreviewSrc", void 0),
            a(this, "effects", void 0),
            a(this, "animationType", void 0),
            a(this, "staticFrameSrc", void 0),
            (this.type = r.R.PROFILE_EFFECT),
            (this.title = e.title),
            (this.description = e.description),
            (this.accessibilityLabel = e.accessibilityLabel),
            (this.reducedMotionSrc = e.reducedMotionSrc),
            (this.thumbnailPreviewSrc = e.thumbnailPreviewSrc),
            (this.effects = e.effects),
            (this.animationType = e.animationType),
            (this.staticFrameSrc = e.staticFrameSrc);
    }
}
