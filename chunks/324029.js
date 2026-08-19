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
                    n.e("825337"),
                    n.e("552653"),
                    n.e("85427"),
                    n.e("51872"),
                    n.e("560570"),
                    n.e("797845"),
                    n.e("659500"),
                    n.e("491899"),
                    n.e("867721"),
                    n.e("567999"),
                    n.e("397244"),
                    n.e("948184"),
                    n.e("441674"),
                    n.e("377265"),
                    n.e("291329"),
                    n.e("35328"),
                    n.e("400088"),
                    n.e("64769"),
                    n.e("596955"),
                    n.e("992956"),
                    n.e("880150"),
                    n.e("606633"),
                    n.e("7452"),
                    n.e("529787"),
                    n.e("60002"),
                    n.e("189423"),
                    n.e("559939"),
                    n.e("691398"),
                    n.e("266201"),
                    n.e("752704"),
                    n.e("56606"),
                    n.e("611585"),
                    n.e("234017"),
                    n.e("629972"),
                    n.e("40791"),
                    n.e("358404"),
                    n.e("245758"),
                    n.e("561672"),
                    n.e("977306"),
                    n.e("847980"),
                    n.e("957251"),
                    n.e("677624"),
                    n.e("933373"),
                    n.e("582118"),
                    n.e("201074"),
                    n.e("879641"),
                    n.e("473112"),
                    n.e("401317"),
                    n.e("862735"),
                    n.e("311580"),
                    n.e("174554"),
                    n.e("116815"),
                    n.e("279804"),
                    n.e("180046"),
                    n.e("124054"),
                    n.e("419656"),
                    n.e("411430"),
                    n.e("296956"),
                    n.e("334168"),
                    n.e("582012"),
                    n.e("781821"),
                    n.e("650387"),
                    n.e("195719"),
                    n.e("45852"),
                    n.e("678906"),
                    n.e("358931"),
                    n.e("684031"),
                    n.e("962953"),
                    n.e("434168"),
                    n.e("893909"),
                    n.e("340363"),
                    n.e("459086"),
                    n.e("720210"),
                    n.e("799357"),
                    n.e("812720"),
                    n.e("891089"),
                    n.e("536396"),
                    n.e("786749"),
                    n.e("319714"),
                    n.e("189281"),
                    n.e("363116"),
                    n.e("573285"),
                    n.e("495628"),
                    n.e("390430"),
                    n.e("326605"),
                    n.e("644289"),
                    n.e("460915"),
                    n.e("675582"),
                    n.e("856943"),
                    n.e("192388"),
                    n.e("165994"),
                    n.e("652091"),
                    n.e("996907"),
                    n.e("960175"),
                    n.e("377989"),
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
                    n.e("73874"),
                    n.e("89892"),
                    n.e("829177"),
                    n.e("444376"),
                    n.e("896232"),
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
                    n.e("864931"),
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
                    n.e("756210"),
                    n.e("274380"),
                    n.e("317225"),
                    n.e("434691"),
                    n.e("761935"),
                    n.e("858821"),
                    n.e("539620"),
                    n.e("176358"),
                    n.e("427926"),
                    n.e("999146"),
                    n.e("214524"),
                    n.e("87306"),
                    n.e("146248"),
                    n.e("637721"),
                    n.e("356948"),
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
