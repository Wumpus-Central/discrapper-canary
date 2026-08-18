"use strict";
n.d(t, { JX: () => m, se: () => I, v_: () => p, xp: () => h, yR: () => T });
var i = n(240899),
    r = n(626584),
    a = n(723702),
    s = n(19575),
    l = n(264572).Buffer;
let o = new r.A("RPCServer:CS2GSI"),
    d = null,
    c = null,
    u = 0,
    _ = null;
function E() {
    let e = s.Ay.releaseChannel;
    return "" === e ? "stable" : e;
}
function A() {
    return `/cs2-gsi-${E()}`;
}
function h(e) {
    return e === A();
}
async function I(e) {
    i.A.getConfig({ location: "gsi config install" }).enableCs2Gsi &&
        (null != _ && (await _),
        (_ = (async () => {
            if (!(0, a.isWindows)()) return;
            if (!e) {
                d = null;
                let e = await s.Ay.deleteCs2GsiConfig(E());
                o.info(`GSI config removal ${e ? "succeeded" : "failed"}`);
                return;
            }
            let { default: t } = await Promise.all([
                    n.e("98818"),
                    n.e("794246"),
                    n.e("365110"),
                    n.e("130706"),
                    n.e("421223"),
                    n.e("476984"),
                    n.e("220389"),
                    n.e("451566"),
                    n.e("574965"),
                    n.e("300450"),
                    n.e("161756"),
                    n.e("995705"),
                    n.e("864031"),
                    n.e("495522"),
                    n.e("984137"),
                    n.e("352403"),
                    n.e("512157"),
                    n.e("472866"),
                    n.e("414397"),
                    n.e("799453"),
                    n.e("663369"),
                    n.e("239816"),
                    n.e("886148"),
                    n.e("748968"),
                    n.e("182277"),
                    n.e("267232"),
                    n.e("762376"),
                    n.e("597569"),
                    n.e("701348"),
                    n.e("478909"),
                    n.e("44153"),
                    n.e("395914"),
                    n.e("72032"),
                    n.e("225091"),
                    n.e("986760"),
                    n.e("68454"),
                    n.e("79998"),
                    n.e("290093"),
                    n.e("909403"),
                    n.e("294128"),
                    n.e("517223"),
                    n.e("305689"),
                    n.e("195553"),
                    n.e("708397"),
                    n.e("712975"),
                    n.e("167672"),
                    n.e("360481"),
                    n.e("771612"),
                    n.e("114508"),
                    n.e("361361"),
                    n.e("263177"),
                    n.e("292428"),
                    n.e("67482"),
                    n.e("117763"),
                    n.e("800961"),
                    n.e("757638"),
                    n.e("983199"),
                    n.e("918448"),
                    n.e("869729"),
                    n.e("433757"),
                    n.e("909852"),
                    n.e("78477"),
                    n.e("933439"),
                    n.e("327508"),
                    n.e("284169"),
                    n.e("243767"),
                    n.e("205528"),
                    n.e("4820"),
                    n.e("599467"),
                    n.e("100722"),
                    n.e("304670"),
                    n.e("912249"),
                    n.e("207117"),
                    n.e("559804"),
                    n.e("811245"),
                    n.e("841272"),
                    n.e("373243"),
                    n.e("325933"),
                    n.e("576921"),
                    n.e("130826"),
                    n.e("671229"),
                    n.e("712439"),
                    n.e("200010"),
                    n.e("503143"),
                    n.e("102523"),
                    n.e("930192"),
                    n.e("522128"),
                    n.e("502199"),
                    n.e("693020"),
                    n.e("758186"),
                    n.e("79863"),
                    n.e("988744"),
                    n.e("46259"),
                    n.e("609023"),
                    n.e("982034"),
                    n.e("424199"),
                    n.e("645499"),
                    n.e("964367"),
                    n.e("307296"),
                    n.e("28154"),
                    n.e("27773"),
                    n.e("349619"),
                    n.e("776195"),
                    n.e("183776"),
                    n.e("599666"),
                    n.e("894747"),
                    n.e("300699"),
                    n.e("346102"),
                    n.e("276640"),
                    n.e("398125"),
                    n.e("611523"),
                    n.e("621624"),
                    n.e("253729"),
                    n.e("593600"),
                    n.e("482815"),
                    n.e("170653"),
                    n.e("234236"),
                    n.e("543039"),
                    n.e("948804"),
                    n.e("418943"),
                    n.e("155314"),
                    n.e("558724"),
                    n.e("829177"),
                    n.e("444376"),
                    n.e("430920"),
                    n.e("161379"),
                    n.e("232551"),
                    n.e("53374"),
                    n.e("264236"),
                    n.e("710638"),
                    n.e("904723"),
                    n.e("631825"),
                    n.e("770697"),
                    n.e("318546"),
                    n.e("620320"),
                    n.e("851243"),
                    n.e("466322"),
                    n.e("50015"),
                    n.e("747017"),
                    n.e("165595"),
                    n.e("858514"),
                    n.e("588940"),
                    n.e("199999"),
                    n.e("847555"),
                    n.e("776750"),
                    n.e("511527"),
                    n.e("515168"),
                    n.e("936320"),
                    n.e("763070"),
                    n.e("564615"),
                    n.e("193158"),
                    n.e("955184"),
                    n.e("123216"),
                    n.e("784041"),
                    n.e("638658"),
                    n.e("190889"),
                    n.e("314805"),
                    n.e("790244"),
                    n.e("173547"),
                    n.e("844695"),
                    n.e("560658"),
                    n.e("809964"),
                    n.e("317225"),
                    n.e("434691"),
                    n.e("761935"),
                    n.e("858821"),
                    n.e("539620"),
                    n.e("486726"),
                    n.e("427926"),
                    n.e("999146"),
                    n.e("214524"),
                    n.e("87306"),
                    n.e("146248"),
                    n.e("637721"),
                    n.e("110004"),
                    n.e("632744"),
                    n.e("123353"),
                    n.e("836545"),
                    n.e("505551"),
                    n.e("257520"),
                    n.e("313681"),
                    n.e("224992"),
                    n.e("491849"),
                    n.e("901555"),
                    n.e("231578"),
                    n.e("225990"),
                    n.e("463095"),
                    n.e("131223"),
                    n.e("584605"),
                    n.e("106787"),
                ]).then(n.bind(n, 33006)),
                i = t.getPort();
            if (null == i) return void o.info("RPC server not ready yet; deferring GSI config install");
            d = (await s.Ay.readCs2GsiToken(E())) ?? window.crypto.randomUUID().replace(/-/g, "");
            let r = `http://127.0.0.1:${i}${A()}`;
            try {
                let e = await s.Ay.writeCs2GsiConfig(r, d, E());
                o.info(`GSI config install ${e ? "succeeded" : "skipped"}`);
            } catch (e) {
                o.warn("GSI config install failed", e);
            }
        })()),
        await _);
}
function f(e, t) {
    e.setHeader("Connection", "close"), e.writeHead(t), e.end();
}
function p(e) {
    (c = e), (u = 0);
}
function T() {
    c = null;
}
function m(e, t) {
    let n = c;
    if (null == n) return void f(t, 403);
    if (null == d) return void f(t, 503);
    let i = e.headers();
    if (!(i["user-agent"] ?? "").startsWith("Valve/Steam HTTP Client")) return void f(t, 403);
    let r = Number(i["content-length"] ?? NaN);
    if (!Number.isFinite(r) || r > 524288) return void f(t, 413);
    let a = "",
        s = 0,
        _ = !1;
    e.on("data", (e) => {
        if (_) return;
        let n = String(e);
        if ((s += l.byteLength(n)) > 524288) {
            (_ = !0), f(t, 413);
            return;
        }
        a += n;
    }),
        e.on("error", () => {}),
        e.on("end", () => {
            let e;
            if (!_) {
                try {
                    e = JSON.parse(a);
                } catch (e) {
                    f(t, 400);
                    return;
                }
                if ("string" != typeof e?.auth?.token || e.auth.token !== d) {
                    ++u >= 5 &&
                        (o.warn("Too many bad GSI requests; unregistering handler for this session"), (c = null)),
                        f(t, 401);
                    return;
                }
                t.writeHead(200), t.end();
                try {
                    n(e);
                } catch (e) {
                    o.warn("GSI payload handler threw", e);
                }
            }
        });
}
