n.d(t, {
    m: () => _,
});
var r = n(627968);
n(64700);
var i = n(13181),
    a = n(786558),
    s = n(799226);

function o(e, t, n) {
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

function l(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}

function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = f(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let p = {
    MAIN: {
        reducedMotion: "boolean",
        twoFriends: "boolean",
        AnimationState: "number",
        "Avatar01/ShadowVisibility": "number",
        "Avatar01/StrokeVisibility": "number",
        "Avatar01/UsernameVisibility": "number",
        "Avatar01/Stroke": "color",
        "Avatar01/Fill": "color",
        "Avatar01/Username": "string",
        "Avatar01/img": "image",
        "Avatar02/ShadowVisibility": "number",
        "Avatar02/StrokeVisibility": "number",
        "Avatar02/UsernameVisibility": "number",
        "Avatar02/Stroke": "color",
        "Avatar02/Fill": "color",
        "Avatar02/Username": "string",
        "Avatar02/img": "image",
        "Avatar03/ShadowVisibility": "number",
        "Avatar03/StrokeVisibility": "number",
        "Avatar03/UsernameVisibility": "number",
        "Avatar03/Stroke": "color",
        "Avatar03/Fill": "color",
        "Avatar03/Username": "string",
        "Avatar03/img": "image",
        "Avatar04/ShadowVisibility": "number",
        "Avatar04/StrokeVisibility": "number",
        "Avatar04/UsernameVisibility": "number",
        "Avatar04/Stroke": "color",
        "Avatar04/Fill": "color",
        "Avatar04/Username": "string",
        "Avatar04/img": "image",
        "Avatar05/ShadowVisibility": "number",
        "Avatar05/StrokeVisibility": "number",
        "Avatar05/UsernameVisibility": "number",
        "Avatar05/Stroke": "color",
        "Avatar05/Fill": "color",
        "Avatar05/Username": "string",
        "Avatar05/img": "image",
        ConnectorColor: "color",
    },
    Sidekick: {
        reducedMotion: "boolean",
        twoFriends: "boolean",
        AnimationState: "number",
        "Avatar01/ShadowVisibility": "number",
        "Avatar01/StrokeVisibility": "number",
        "Avatar01/UsernameVisibility": "number",
        "Avatar01/Stroke": "color",
        "Avatar01/Fill": "color",
        "Avatar01/Username": "string",
        "Avatar01/img": "image",
        "Avatar02/ShadowVisibility": "number",
        "Avatar02/StrokeVisibility": "number",
        "Avatar02/UsernameVisibility": "number",
        "Avatar02/Stroke": "color",
        "Avatar02/Fill": "color",
        "Avatar02/Username": "string",
        "Avatar02/img": "image",
        "Avatar03/ShadowVisibility": "number",
        "Avatar03/StrokeVisibility": "number",
        "Avatar03/UsernameVisibility": "number",
        "Avatar03/Stroke": "color",
        "Avatar03/Fill": "color",
        "Avatar03/Username": "string",
        "Avatar03/img": "image",
        "Avatar04/ShadowVisibility": "number",
        "Avatar04/StrokeVisibility": "number",
        "Avatar04/UsernameVisibility": "number",
        "Avatar04/Stroke": "color",
        "Avatar04/Fill": "color",
        "Avatar04/Username": "string",
        "Avatar04/img": "image",
        "Avatar05/ShadowVisibility": "number",
        "Avatar05/StrokeVisibility": "number",
        "Avatar05/UsernameVisibility": "number",
        "Avatar05/Stroke": "color",
        "Avatar05/Fill": "color",
        "Avatar05/Username": "string",
        "Avatar05/img": "image",
        ConnectorColor: "color",
    },
    Avatar: {
        ShadowVisibility: "number",
        StrokeVisibility: "number",
        UsernameVisibility: "number",
        Stroke: "color",
        Fill: "color",
        Username: "string",
        img: "image",
    },
    Username: {
        ShadowVisibility: "number",
        StrokeVisibility: "number",
        UsernameVisibility: "number",
        Stroke: "color",
        Fill: "color",
        Username: "string",
        img: "image",
    },
    "Friends 01 Rotation": {
        reducedMotion: "boolean",
        twoFriends: "boolean",
        AnimationState: "number",
        "Avatar01/ShadowVisibility": "number",
        "Avatar01/StrokeVisibility": "number",
        "Avatar01/UsernameVisibility": "number",
        "Avatar01/Stroke": "color",
        "Avatar01/Fill": "color",
        "Avatar01/Username": "string",
        "Avatar01/img": "image",
        "Avatar02/ShadowVisibility": "number",
        "Avatar02/StrokeVisibility": "number",
        "Avatar02/UsernameVisibility": "number",
        "Avatar02/Stroke": "color",
        "Avatar02/Fill": "color",
        "Avatar02/Username": "string",
        "Avatar02/img": "image",
        "Avatar03/ShadowVisibility": "number",
        "Avatar03/StrokeVisibility": "number",
        "Avatar03/UsernameVisibility": "number",
        "Avatar03/Stroke": "color",
        "Avatar03/Fill": "color",
        "Avatar03/Username": "string",
        "Avatar03/img": "image",
        "Avatar04/ShadowVisibility": "number",
        "Avatar04/StrokeVisibility": "number",
        "Avatar04/UsernameVisibility": "number",
        "Avatar04/Stroke": "color",
        "Avatar04/Fill": "color",
        "Avatar04/Username": "string",
        "Avatar04/img": "image",
        "Avatar05/ShadowVisibility": "number",
        "Avatar05/StrokeVisibility": "number",
        "Avatar05/UsernameVisibility": "number",
        "Avatar05/Stroke": "color",
        "Avatar05/Fill": "color",
        "Avatar05/Username": "string",
        "Avatar05/img": "image",
        ConnectorColor: "color",
    },
};

function _(e) {
    let { artboard: t = "MAIN" } = e,
        n = d(e, ["artboard"]),
        { status: o, buffer: c } = (0, s.CE)(i.A),
        f = (0, s.m2)(i.A);
    return o === s.BW.Loading
        ? null
        : (0, r.jsx)(
              a.w,
              l(
                  u(
                      l(
                          {},
                          f
                              ? {
                                    key: "override",
                                }
                              : {},
                      ),
                      {
                          buffer: c,
                          artboard: t,
                          artboardProperties: p,
                      },
                  ),
                  n,
              ),
          );
}
_.riveSrc = i.A;
