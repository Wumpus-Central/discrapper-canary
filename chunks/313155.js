(n.d(t, { U1: () => p, fS: () => f }), n(321073));
var i,
    r,
    a =
        (((i = {})[(i.NO_CLASSIFICATION = 0)] = "NO_CLASSIFICATION"),
        (i[(i.MANUAL_CLASSIFICATION = 1)] = "MANUAL_CLASSIFICATION"),
        (i[(i.AUTOMATED_CLASSIFICATION = 2)] = "AUTOMATED_CLASSIFICATION"),
        (i[(i.AGENCY_CLASSIFICATION_ESRB = 3)] = "AGENCY_CLASSIFICATION_ESRB"),
        (i[(i.AGENCY_CLASSIFICATION_PEGI = 4)] = "AGENCY_CLASSIFICATION_PEGI"),
        (i[(i.DISCORD_CLASSIFICATION = 5)] = "DISCORD_CLASSIFICATION"),
        (i[(i.AGENCY_CLASSIFICATION_GOP = 6)] = "AGENCY_CLASSIFICATION_GOP"),
        (i[(i.AGENCY_CLASSIFICATION_IGDB = 7)] = "AGENCY_CLASSIFICATION_IGDB"),
        (i[(i.AGENCY_CLASSIFICATION_APPLE = 8)] = "AGENCY_CLASSIFICATION_APPLE"),
        (i[(i.AGENCY_CLASSIFICATION_ROBLOX = 9)] = "AGENCY_CLASSIFICATION_ROBLOX"),
        i),
    s = n(381438);
let l = { ALL: new Set([1, 2, 3, 4, 5, 6, 7]), IS_ADULT_ONLY: new Set([]) },
    o = { ALL: new Set([1, 2, 3, 4, 5, 6]), IS_ADULT_ONLY: new Set([5]) },
    d = { ALL: new Set([1]), IS_ADULT: new Set([1]) },
    c = {
        ALL: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]),
        ADULT_THEMES: new Set([21]),
    },
    u = { ALL: new Set([1, 2, 3, 4, 5]), IS_ADULT_ONLY: new Set([]) },
    _ = { ALL: new Set([1, 2, 3, 4, 5, 6, 7]), IS_ADULT_ONLY: new Set([]) };
var E = n(136722);
let A = Object.freeze({
        EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED: E.vI(0),
        SEXUALLY_SUGGESTIVE_IMAGERY: E.vI(1),
        SEXUALLY_SUGGESTIVE_TEXT: E.vI(2),
        SEXUALLY_EXPLICIT_IMAGERY: E.vI(3),
        SEXUALLY_EXPLICIT_TEXT: E.vI(4),
        NUDITY: E.vI(5),
        DATING: E.vI(6),
        REGULATED_GOODS_USAGE: E.vI(7),
        REGULATED_GOODS_DEPICTION: E.vI(8),
        VIOLENCE_DOMESTIC_SIMULATED: E.vI(9),
        VIOLENCE_ANIMALS: E.vI(10),
        VIOLENCE_FANTASY: E.vI(11),
        VIOLENCE_GRAPHIC: E.vI(12),
        SELF_HARM_DEPICTION: E.vI(13),
        SELF_HARM_REFERENCE: E.vI(14),
        GAMBLING_REAL: E.vI(15),
        GAMBLING_SIMULATED: E.vI(16),
        PROFANITY_MILD: E.vI(17),
        PROFANITY_SEVERE: E.vI(18),
        SLURS: E.vI(19),
        DANGEROUS_PHYSICALLY_HARMFUL: E.vI(20),
        DANGEROUS_MENTALLY_HARMFUL: E.vI(21),
        TRAGEDY_SIMULATED_HISTORICAL: E.vI(22),
        TRAGEDY_SIMULATED_NATURAL_DISASTER: E.vI(23),
        TRAGEDY_REAL_MILITARY_CONFLICT: E.vI(24),
    }),
    h = Object.freeze({
        RESTRICTED_TO_ADULT: E.kg(
            A.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED,
            A.SEXUALLY_EXPLICIT_IMAGERY,
            A.SEXUALLY_EXPLICIT_TEXT,
        ),
    });
var f = (((r = {}).FULL = "full"), (r.MINIMAL = "minimal"), r);
let I = { source: a.NO_CLASSIFICATION, status: s.Y.EVERYONE };
function p(e) {
    return (function (e) {
        var t, n, i, r, E;
        let A, h, f, p, m, g;
        if (null == e) return I;
        let S = [],
            { type: N, data: C } = e;
        return (
            "minimal" === N
                ? null != C.discord_classifications && S.push(T(a.DISCORD_CLASSIFICATION, C.discord_classifications))
                : null != C.manual_classifications
                  ? S.push(T(a.MANUAL_CLASSIFICATION, C.manual_classifications))
                  : null != C.automated_classifications &&
                    S.push(T(a.AUTOMATED_CLASSIFICATION, C.automated_classifications)),
            null != C.agency_ratings &&
                (null != C.agency_ratings.esrb &&
                    S.push(
                        ((t = C.agency_ratings.esrb),
                        (A = o.IS_ADULT_ONLY.has(t.rating) ? s.Y.ADULT : s.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_ESRB, status: A }),
                    ),
                null != C.agency_ratings.pegi &&
                    S.push(
                        ((n = C.agency_ratings.pegi),
                        (h = u.IS_ADULT_ONLY.has(n.rating) ? s.Y.ADULT : s.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_PEGI, status: h }),
                    ),
                null != C.agency_ratings.gop &&
                    S.push(
                        ((i = C.agency_ratings.gop),
                        (f = d.IS_ADULT.has(i.classification) ? s.Y.ADULT : s.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_GOP, status: f }),
                    ),
                null != C.agency_ratings.igdb &&
                    S.push(
                        ((p = (C.agency_ratings.igdb.themes ?? []).some((e) => c.ADULT_THEMES.has(e))
                            ? s.Y.ADULT
                            : s.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_IGDB, status: p }),
                    ),
                null != C.agency_ratings.apple &&
                    S.push(
                        ((r = C.agency_ratings.apple),
                        (m = l.IS_ADULT_ONLY.has(r.rating) ? s.Y.ADULT : s.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_APPLE, status: m }),
                    ),
                null != C.agency_ratings.roblox &&
                    S.push(
                        ((E = C.agency_ratings.roblox),
                        (g = _.IS_ADULT_ONLY.has(E.rating) ? s.Y.ADULT : s.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_ROBLOX, status: g }),
                    )),
            (function (e) {
                let t = null;
                for (let r of e) {
                    var n, i;
                    if (null == t) {
                        t = r;
                        continue;
                    }
                    ((n = r.status), (i = t.status), s.R.indexOf(n) - s.R.indexOf(i) > 0 && (t = r));
                }
                return t ?? I;
            })(S)
        );
    })(e).status;
}
function T(e, t) {
    let n = E.iu(t);
    return E.zy(n, A.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)
        ? { source: e, status: s.Y.ADULT }
        : { source: e, status: E.X8(n, h.RESTRICTED_TO_ADULT) ? s.Y.ADULT : s.Y.EVERYONE };
}
