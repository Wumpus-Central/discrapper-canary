t.d(n, { playgroundConfig: () => t_ });
var i,
    r,
    a,
    o,
    s,
    l = t(477900),
    d = t(582128);
t(321073);
var c = t(852015),
    u = t(144367),
    h = t(428420),
    m = t(505816),
    f = t(406935),
    g = t(991023),
    p =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.CARDS = 1)] = "CARDS"),
        (i[(i.TABLE = 2)] = "TABLE"),
        i),
    k =
        (((r = {})[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.EQ = 1)] = "EQ"),
        (r[(r.GTE = 2)] = "GTE"),
        (r[(r.LTE = 3)] = "LTE"),
        r);
class y extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.SurveyDefinition", [
            { no: 1, name: "title", kind: "message", T: () => g.X },
            { no: 2, name: "default_locale", kind: "scalar", T: 9 },
            { no: 3, name: "locales", kind: "scalar", repeat: 2, T: 9 },
            { no: 4, name: "pages", kind: "message", repeat: 1, T: () => v },
            { no: 5, name: "scores", kind: "message", repeat: 1, T: () => eh },
            { no: 6, name: "randomized_page_groups", kind: "message", repeat: 1, T: () => b },
            { no: 7, name: "end_message", kind: "message", T: () => g.X },
            { no: 8, name: "next_id", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let n = { defaultLocale: "", locales: [], pages: [], scores: [], randomizedPageGroups: [], nextId: 0 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.title = g.X.internalBinaryRead(e, e.uint32(), t, r.title);
                    break;
                case 2:
                    r.defaultLocale = e.string();
                    break;
                case 3:
                    r.locales.push(e.string());
                    break;
                case 4:
                    r.pages.push(v.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 5:
                    r.scores.push(eh.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 6:
                    r.randomizedPageGroups.push(b.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 7:
                    r.endMessage = g.X.internalBinaryRead(e, e.uint32(), t, r.endMessage);
                    break;
                case 8:
                    r.nextId = e.uint32();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (e.title && g.X.internalBinaryWrite(e.title, n.tag(1, c.O0.LengthDelimited).fork(), t).join(),
            "" !== e.defaultLocale && n.tag(2, c.O0.LengthDelimited).string(e.defaultLocale));
        for (let t = 0; t < e.locales.length; t++) n.tag(3, c.O0.LengthDelimited).string(e.locales[t]);
        for (let i = 0; i < e.pages.length; i++)
            v.internalBinaryWrite(e.pages[i], n.tag(4, c.O0.LengthDelimited).fork(), t).join();
        for (let i = 0; i < e.scores.length; i++)
            eh.internalBinaryWrite(e.scores[i], n.tag(5, c.O0.LengthDelimited).fork(), t).join();
        for (let i = 0; i < e.randomizedPageGroups.length; i++)
            b.internalBinaryWrite(e.randomizedPageGroups[i], n.tag(6, c.O0.LengthDelimited).fork(), t).join();
        (e.endMessage && g.X.internalBinaryWrite(e.endMessage, n.tag(7, c.O0.LengthDelimited).fork(), t).join(),
            0 !== e.nextId && n.tag(8, c.O0.Varint).uint32(e.nextId));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
new y();
class w extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.PageGroup", [
            { no: 1, name: "page_ids", kind: "scalar", repeat: 1, T: 13 },
            { no: 2, name: "shown_page_count", kind: "message", T: () => f.ZQ },
        ]);
    }
    create(e) {
        let n = { pageIds: [] };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    if (i === c.O0.LengthDelimited)
                        for (let n = e.int32() + e.pos; e.pos < n;) r.pageIds.push(e.uint32());
                    else r.pageIds.push(e.uint32());
                    break;
                case 2:
                    r.shownPageCount = f.ZQ.internalBinaryRead(e, e.uint32(), t, r.shownPageCount);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        if (e.pageIds.length) {
            n.tag(1, c.O0.LengthDelimited).fork();
            for (let t = 0; t < e.pageIds.length; t++) n.uint32(e.pageIds[t]);
            n.join();
        }
        e.shownPageCount && f.ZQ.internalBinaryWrite(e.shownPageCount, n.tag(2, c.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let b = new w();
class x extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.Page", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "show_if", kind: "message", T: () => ey },
            { no: 3, name: "end_if", kind: "message", T: () => $ },
            { no: 4, name: "questions", kind: "message", oneof: "kind", T: () => O },
            { no: 5, name: "conjoint", kind: "message", oneof: "kind", T: () => I },
            { no: 6, name: "maxdiff", kind: "message", oneof: "kind", T: () => S },
        ]);
    }
    create(e) {
        let n = { id: 0, kind: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.showIf = ey.internalBinaryRead(e, e.uint32(), t, r.showIf);
                    break;
                case 3:
                    r.endIf = $.internalBinaryRead(e, e.uint32(), t, r.endIf);
                    break;
                case 4:
                    r.kind = {
                        oneofKind: "questions",
                        questions: O.internalBinaryRead(e, e.uint32(), t, r.kind.questions),
                    };
                    break;
                case 5:
                    r.kind = {
                        oneofKind: "conjoint",
                        conjoint: I.internalBinaryRead(e, e.uint32(), t, r.kind.conjoint),
                    };
                    break;
                case 6:
                    r.kind = { oneofKind: "maxdiff", maxdiff: S.internalBinaryRead(e, e.uint32(), t, r.kind.maxdiff) };
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, c.O0.Varint).uint32(e.id),
            e.showIf && ey.internalBinaryWrite(e.showIf, n.tag(2, c.O0.LengthDelimited).fork(), t).join(),
            e.endIf && $.internalBinaryWrite(e.endIf, n.tag(3, c.O0.LengthDelimited).fork(), t).join(),
            "questions" === e.kind.oneofKind &&
                O.internalBinaryWrite(e.kind.questions, n.tag(4, c.O0.LengthDelimited).fork(), t).join(),
            "conjoint" === e.kind.oneofKind &&
                I.internalBinaryWrite(e.kind.conjoint, n.tag(5, c.O0.LengthDelimited).fork(), t).join(),
            "maxdiff" === e.kind.oneofKind &&
                S.internalBinaryWrite(e.kind.maxdiff, n.tag(6, c.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let v = new x();
class T extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.EndIf", [
            { no: 1, name: "condition", kind: "message", T: () => ey },
            { no: 2, name: "message", kind: "message", T: () => g.X },
        ]);
    }
    create(e) {
        let n = {};
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.condition = ey.internalBinaryRead(e, e.uint32(), t, r.condition);
                    break;
                case 2:
                    r.message = g.X.internalBinaryRead(e, e.uint32(), t, r.message);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (e.condition && ey.internalBinaryWrite(e.condition, n.tag(1, c.O0.LengthDelimited).fork(), t).join(),
            e.message && g.X.internalBinaryWrite(e.message, n.tag(2, c.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let $ = new T();
class j extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.QuestionPage", [
            { no: 1, name: "questions", kind: "message", repeat: 1, T: () => q },
            { no: 2, name: "randomize_questions", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let n = { questions: [], randomizeQuestions: !1 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.questions.push(q.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 2:
                    r.randomizeQuestions = e.bool();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        for (let i = 0; i < e.questions.length; i++)
            q.internalBinaryWrite(e.questions[i], n.tag(1, c.O0.LengthDelimited).fork(), t).join();
        !1 !== e.randomizeQuestions && n.tag(2, c.O0.Varint).bool(e.randomizeQuestions);
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let O = new j();
class B extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ConjointPage", [
            { no: 1, name: "export_label", kind: "scalar", T: 9 },
            { no: 2, name: "text", kind: "message", T: () => g.X },
            { no: 3, name: "features", kind: "message", repeat: 1, T: () => R },
            { no: 4, name: "task_count", kind: "scalar", T: 13 },
            { no: 5, name: "concepts_per_task", kind: "scalar", T: 13 },
            { no: 6, name: "include_none_option", kind: "scalar", T: 8 },
            { no: 7, name: "exclusions", kind: "message", repeat: 1, T: () => U },
            { no: 8, name: "randomize_feature_order", kind: "scalar", T: 8 },
            {
                no: 9,
                name: "display",
                kind: "enum",
                T: () => ["discord_protos.discord_surveys.v1.ConjointDisplay", p, "CONJOINT_DISPLAY_"],
            },
            { no: 10, name: "concept_label", kind: "message", T: () => g.X },
        ]);
    }
    create(e) {
        let n = {
            exportLabel: "",
            features: [],
            taskCount: 0,
            conceptsPerTask: 0,
            includeNoneOption: !1,
            exclusions: [],
            randomizeFeatureOrder: !1,
            display: 0,
        };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.exportLabel = e.string();
                    break;
                case 2:
                    r.text = g.X.internalBinaryRead(e, e.uint32(), t, r.text);
                    break;
                case 3:
                    r.features.push(R.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 4:
                    r.taskCount = e.uint32();
                    break;
                case 5:
                    r.conceptsPerTask = e.uint32();
                    break;
                case 6:
                    r.includeNoneOption = e.bool();
                    break;
                case 7:
                    r.exclusions.push(U.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 8:
                    r.randomizeFeatureOrder = e.bool();
                    break;
                case 9:
                    r.display = e.int32();
                    break;
                case 10:
                    r.conceptLabel = g.X.internalBinaryRead(e, e.uint32(), t, r.conceptLabel);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        ("" !== e.exportLabel && n.tag(1, c.O0.LengthDelimited).string(e.exportLabel),
            e.text && g.X.internalBinaryWrite(e.text, n.tag(2, c.O0.LengthDelimited).fork(), t).join());
        for (let i = 0; i < e.features.length; i++)
            R.internalBinaryWrite(e.features[i], n.tag(3, c.O0.LengthDelimited).fork(), t).join();
        (0 !== e.taskCount && n.tag(4, c.O0.Varint).uint32(e.taskCount),
            0 !== e.conceptsPerTask && n.tag(5, c.O0.Varint).uint32(e.conceptsPerTask),
            !1 !== e.includeNoneOption && n.tag(6, c.O0.Varint).bool(e.includeNoneOption));
        for (let i = 0; i < e.exclusions.length; i++)
            U.internalBinaryWrite(e.exclusions[i], n.tag(7, c.O0.LengthDelimited).fork(), t).join();
        (!1 !== e.randomizeFeatureOrder && n.tag(8, c.O0.Varint).bool(e.randomizeFeatureOrder),
            0 !== e.display && n.tag(9, c.O0.Varint).int32(e.display),
            e.conceptLabel &&
                g.X.internalBinaryWrite(e.conceptLabel, n.tag(10, c.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let I = new B();
class N extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ConjointFeature", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "label", kind: "message", T: () => g.X },
            { no: 3, name: "levels", kind: "message", repeat: 1, T: () => L },
            { no: 4, name: "price_currency", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let n = { id: 0, levels: [], priceCurrency: "" };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.label = g.X.internalBinaryRead(e, e.uint32(), t, r.label);
                    break;
                case 3:
                    r.levels.push(L.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 4:
                    r.priceCurrency = e.string();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, c.O0.Varint).uint32(e.id),
            e.label && g.X.internalBinaryWrite(e.label, n.tag(2, c.O0.LengthDelimited).fork(), t).join());
        for (let i = 0; i < e.levels.length; i++)
            L.internalBinaryWrite(e.levels[i], n.tag(3, c.O0.LengthDelimited).fork(), t).join();
        "" !== e.priceCurrency && n.tag(4, c.O0.LengthDelimited).string(e.priceCurrency);
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let R = new N();
class _ extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ConjointLevel", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "text", kind: "message", T: () => g.X },
            { no: 3, name: "image_url", kind: "scalar", T: 9 },
            { no: 4, name: "image_alt_text", kind: "message", T: () => g.X },
            { no: 5, name: "price", kind: "message", T: () => f.$b },
        ]);
    }
    create(e) {
        let n = { id: 0, imageUrl: "" };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.text = g.X.internalBinaryRead(e, e.uint32(), t, r.text);
                    break;
                case 3:
                    r.imageUrl = e.string();
                    break;
                case 4:
                    r.imageAltText = g.X.internalBinaryRead(e, e.uint32(), t, r.imageAltText);
                    break;
                case 5:
                    r.price = f.$b.internalBinaryRead(e, e.uint32(), t, r.price);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, c.O0.Varint).uint32(e.id),
            e.text && g.X.internalBinaryWrite(e.text, n.tag(2, c.O0.LengthDelimited).fork(), t).join(),
            "" !== e.imageUrl && n.tag(3, c.O0.LengthDelimited).string(e.imageUrl),
            e.imageAltText && g.X.internalBinaryWrite(e.imageAltText, n.tag(4, c.O0.LengthDelimited).fork(), t).join(),
            e.price && f.$b.internalBinaryWrite(e.price, n.tag(5, c.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let L = new _();
class W extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ConjointExclusion", [
            { no: 1, name: "first", kind: "message", T: () => C },
            { no: 2, name: "second", kind: "message", T: () => C },
        ]);
    }
    create(e) {
        let n = {};
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.first = C.internalBinaryRead(e, e.uint32(), t, r.first);
                    break;
                case 2:
                    r.second = C.internalBinaryRead(e, e.uint32(), t, r.second);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (e.first && C.internalBinaryWrite(e.first, n.tag(1, c.O0.LengthDelimited).fork(), t).join(),
            e.second && C.internalBinaryWrite(e.second, n.tag(2, c.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let U = new W();
class D extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.FeatureLevel", [
            { no: 1, name: "feature_id", kind: "scalar", T: 13 },
            { no: 2, name: "level_id", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let n = { featureId: 0, levelId: 0 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.featureId = e.uint32();
                    break;
                case 2:
                    r.levelId = e.uint32();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.featureId && n.tag(1, c.O0.Varint).uint32(e.featureId),
            0 !== e.levelId && n.tag(2, c.O0.Varint).uint32(e.levelId));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let C = new D();
class E extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.MaxDiffPage", [
            { no: 1, name: "export_label", kind: "scalar", T: 9 },
            { no: 2, name: "text", kind: "message", T: () => g.X },
            { no: 3, name: "items", kind: "message", repeat: 1, T: () => P },
            { no: 4, name: "items_per_set", kind: "scalar", T: 13 },
            { no: 5, name: "set_count", kind: "scalar", T: 13 },
            { no: 6, name: "most_label", kind: "message", T: () => g.X },
            { no: 7, name: "least_label", kind: "message", T: () => g.X },
            { no: 8, name: "anchor_question_text", kind: "message", T: () => g.X },
        ]);
    }
    create(e) {
        let n = { exportLabel: "", items: [], itemsPerSet: 0, setCount: 0 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.exportLabel = e.string();
                    break;
                case 2:
                    r.text = g.X.internalBinaryRead(e, e.uint32(), t, r.text);
                    break;
                case 3:
                    r.items.push(P.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 4:
                    r.itemsPerSet = e.uint32();
                    break;
                case 5:
                    r.setCount = e.uint32();
                    break;
                case 6:
                    r.mostLabel = g.X.internalBinaryRead(e, e.uint32(), t, r.mostLabel);
                    break;
                case 7:
                    r.leastLabel = g.X.internalBinaryRead(e, e.uint32(), t, r.leastLabel);
                    break;
                case 8:
                    r.anchorQuestionText = g.X.internalBinaryRead(e, e.uint32(), t, r.anchorQuestionText);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        ("" !== e.exportLabel && n.tag(1, c.O0.LengthDelimited).string(e.exportLabel),
            e.text && g.X.internalBinaryWrite(e.text, n.tag(2, c.O0.LengthDelimited).fork(), t).join());
        for (let i = 0; i < e.items.length; i++)
            P.internalBinaryWrite(e.items[i], n.tag(3, c.O0.LengthDelimited).fork(), t).join();
        (0 !== e.itemsPerSet && n.tag(4, c.O0.Varint).uint32(e.itemsPerSet),
            0 !== e.setCount && n.tag(5, c.O0.Varint).uint32(e.setCount),
            e.mostLabel && g.X.internalBinaryWrite(e.mostLabel, n.tag(6, c.O0.LengthDelimited).fork(), t).join(),
            e.leastLabel && g.X.internalBinaryWrite(e.leastLabel, n.tag(7, c.O0.LengthDelimited).fork(), t).join(),
            e.anchorQuestionText &&
                g.X.internalBinaryWrite(e.anchorQuestionText, n.tag(8, c.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let S = new E();
class F extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.MaxDiffItem", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "text", kind: "message", T: () => g.X },
        ]);
    }
    create(e) {
        let n = { id: 0 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.text = g.X.internalBinaryRead(e, e.uint32(), t, r.text);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, c.O0.Varint).uint32(e.id),
            e.text && g.X.internalBinaryWrite(e.text, n.tag(2, c.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let P = new F();
class K extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.Question", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "export_label", kind: "scalar", T: 9 },
            { no: 3, name: "text", kind: "message", T: () => g.X },
            { no: 4, name: "required", kind: "scalar", T: 8 },
            { no: 5, name: "show_if", kind: "message", T: () => ey },
            { no: 6, name: "pinned", kind: "scalar", T: 8 },
            { no: 7, name: "single_choice", kind: "message", oneof: "kind", T: () => A },
            { no: 8, name: "dropdown", kind: "message", oneof: "kind", T: () => A },
            { no: 9, name: "multi_choice", kind: "message", oneof: "kind", T: () => X },
            { no: 10, name: "rank", kind: "message", oneof: "kind", T: () => Z },
            { no: 11, name: "free_text", kind: "message", oneof: "kind", T: () => et },
            { no: 12, name: "scale", kind: "message", oneof: "kind", T: () => er },
            { no: 13, name: "matrix", kind: "message", oneof: "kind", T: () => eo },
            { no: 14, name: "info", kind: "message", oneof: "kind", T: () => ec },
        ]);
    }
    create(e) {
        let n = { id: 0, exportLabel: "", required: !1, pinned: !1, kind: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.exportLabel = e.string();
                    break;
                case 3:
                    r.text = g.X.internalBinaryRead(e, e.uint32(), t, r.text);
                    break;
                case 4:
                    r.required = e.bool();
                    break;
                case 5:
                    r.showIf = ey.internalBinaryRead(e, e.uint32(), t, r.showIf);
                    break;
                case 6:
                    r.pinned = e.bool();
                    break;
                case 7:
                    r.kind = {
                        oneofKind: "singleChoice",
                        singleChoice: A.internalBinaryRead(e, e.uint32(), t, r.kind.singleChoice),
                    };
                    break;
                case 8:
                    r.kind = {
                        oneofKind: "dropdown",
                        dropdown: A.internalBinaryRead(e, e.uint32(), t, r.kind.dropdown),
                    };
                    break;
                case 9:
                    r.kind = {
                        oneofKind: "multiChoice",
                        multiChoice: X.internalBinaryRead(e, e.uint32(), t, r.kind.multiChoice),
                    };
                    break;
                case 10:
                    r.kind = { oneofKind: "rank", rank: Z.internalBinaryRead(e, e.uint32(), t, r.kind.rank) };
                    break;
                case 11:
                    r.kind = {
                        oneofKind: "freeText",
                        freeText: et.internalBinaryRead(e, e.uint32(), t, r.kind.freeText),
                    };
                    break;
                case 12:
                    r.kind = { oneofKind: "scale", scale: er.internalBinaryRead(e, e.uint32(), t, r.kind.scale) };
                    break;
                case 13:
                    r.kind = { oneofKind: "matrix", matrix: eo.internalBinaryRead(e, e.uint32(), t, r.kind.matrix) };
                    break;
                case 14:
                    r.kind = { oneofKind: "info", info: ec.internalBinaryRead(e, e.uint32(), t, r.kind.info) };
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, c.O0.Varint).uint32(e.id),
            "" !== e.exportLabel && n.tag(2, c.O0.LengthDelimited).string(e.exportLabel),
            e.text && g.X.internalBinaryWrite(e.text, n.tag(3, c.O0.LengthDelimited).fork(), t).join(),
            !1 !== e.required && n.tag(4, c.O0.Varint).bool(e.required),
            e.showIf && ey.internalBinaryWrite(e.showIf, n.tag(5, c.O0.LengthDelimited).fork(), t).join(),
            !1 !== e.pinned && n.tag(6, c.O0.Varint).bool(e.pinned),
            "singleChoice" === e.kind.oneofKind &&
                A.internalBinaryWrite(e.kind.singleChoice, n.tag(7, c.O0.LengthDelimited).fork(), t).join(),
            "dropdown" === e.kind.oneofKind &&
                A.internalBinaryWrite(e.kind.dropdown, n.tag(8, c.O0.LengthDelimited).fork(), t).join(),
            "multiChoice" === e.kind.oneofKind &&
                X.internalBinaryWrite(e.kind.multiChoice, n.tag(9, c.O0.LengthDelimited).fork(), t).join(),
            "rank" === e.kind.oneofKind &&
                Z.internalBinaryWrite(e.kind.rank, n.tag(10, c.O0.LengthDelimited).fork(), t).join(),
            "freeText" === e.kind.oneofKind &&
                et.internalBinaryWrite(e.kind.freeText, n.tag(11, c.O0.LengthDelimited).fork(), t).join(),
            "scale" === e.kind.oneofKind &&
                er.internalBinaryWrite(e.kind.scale, n.tag(12, c.O0.LengthDelimited).fork(), t).join(),
            "matrix" === e.kind.oneofKind &&
                eo.internalBinaryWrite(e.kind.matrix, n.tag(13, c.O0.LengthDelimited).fork(), t).join(),
            "info" === e.kind.oneofKind &&
                ec.internalBinaryWrite(e.kind.info, n.tag(14, c.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let q = new K();
class V extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ChoiceSource", [
            { no: 1, name: "choices", kind: "message", repeat: 1, T: () => ee },
            { no: 2, name: "choices_from", kind: "message", T: () => H },
            { no: 3, name: "extra_choices", kind: "message", repeat: 1, T: () => ee },
            { no: 4, name: "randomize_choices", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let n = { choices: [], extraChoices: [], randomizeChoices: !1 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.choices.push(ee.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 2:
                    r.choicesFrom = H.internalBinaryRead(e, e.uint32(), t, r.choicesFrom);
                    break;
                case 3:
                    r.extraChoices.push(ee.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 4:
                    r.randomizeChoices = e.bool();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        for (let i = 0; i < e.choices.length; i++)
            ee.internalBinaryWrite(e.choices[i], n.tag(1, c.O0.LengthDelimited).fork(), t).join();
        e.choicesFrom && H.internalBinaryWrite(e.choicesFrom, n.tag(2, c.O0.LengthDelimited).fork(), t).join();
        for (let i = 0; i < e.extraChoices.length; i++)
            ee.internalBinaryWrite(e.extraChoices[i], n.tag(3, c.O0.LengthDelimited).fork(), t).join();
        !1 !== e.randomizeChoices && n.tag(4, c.O0.Varint).bool(e.randomizeChoices);
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let G = new V();
class Q extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.SingleChoiceQuestion", [
            { no: 1, name: "choice_source", kind: "message", T: () => G },
        ]);
    }
    create(e) {
        let n = {};
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            if (1 === n) r.choiceSource = G.internalBinaryRead(e, e.uint32(), t, r.choiceSource);
            else {
                let a = t.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        e.choiceSource && G.internalBinaryWrite(e.choiceSource, n.tag(1, c.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let A = new Q();
class M extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.MultiChoiceQuestion", [
            { no: 1, name: "choice_source", kind: "message", T: () => G },
            { no: 2, name: "min_selected", kind: "message", T: () => f.ZQ },
            { no: 3, name: "max_selected", kind: "message", T: () => f.ZQ },
        ]);
    }
    create(e) {
        let n = {};
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.choiceSource = G.internalBinaryRead(e, e.uint32(), t, r.choiceSource);
                    break;
                case 2:
                    r.minSelected = f.ZQ.internalBinaryRead(e, e.uint32(), t, r.minSelected);
                    break;
                case 3:
                    r.maxSelected = f.ZQ.internalBinaryRead(e, e.uint32(), t, r.maxSelected);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (e.choiceSource && G.internalBinaryWrite(e.choiceSource, n.tag(1, c.O0.LengthDelimited).fork(), t).join(),
            e.minSelected && f.ZQ.internalBinaryWrite(e.minSelected, n.tag(2, c.O0.LengthDelimited).fork(), t).join(),
            e.maxSelected && f.ZQ.internalBinaryWrite(e.maxSelected, n.tag(3, c.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let X = new M();
class z extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RankQuestion", [
            { no: 1, name: "choice_source", kind: "message", T: () => G },
            { no: 2, name: "rank_top", kind: "message", T: () => f.ZQ },
        ]);
    }
    create(e) {
        let n = {};
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.choiceSource = G.internalBinaryRead(e, e.uint32(), t, r.choiceSource);
                    break;
                case 2:
                    r.rankTop = f.ZQ.internalBinaryRead(e, e.uint32(), t, r.rankTop);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (e.choiceSource && G.internalBinaryWrite(e.choiceSource, n.tag(1, c.O0.LengthDelimited).fork(), t).join(),
            e.rankTop && f.ZQ.internalBinaryWrite(e.rankTop, n.tag(2, c.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let Z = new z();
class Y extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ChoicesFrom", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
            { no: 2, name: "selected", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let n = { questionId: 0, selected: !1 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.questionId = e.uint32();
                    break;
                case 2:
                    r.selected = e.bool();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.questionId && n.tag(1, c.O0.Varint).uint32(e.questionId),
            !1 !== e.selected && n.tag(2, c.O0.Varint).bool(e.selected));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let H = new Y();
class J extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.Choice", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "text", kind: "message", T: () => g.X },
            { no: 3, name: "value", kind: "scalar", T: 1 },
            { no: 4, name: "pinned", kind: "scalar", T: 8 },
            { no: 5, name: "exclusive", kind: "scalar", T: 8 },
            { no: 6, name: "allow_text", kind: "scalar", T: 8 },
            { no: 7, name: "text_max_length", kind: "message", T: () => f.ZQ },
            { no: 8, name: "excluded_from_score", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let n = { id: 0, value: 0, pinned: !1, exclusive: !1, allowText: !1, excludedFromScore: !1 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.text = g.X.internalBinaryRead(e, e.uint32(), t, r.text);
                    break;
                case 3:
                    r.value = e.double();
                    break;
                case 4:
                    r.pinned = e.bool();
                    break;
                case 5:
                    r.exclusive = e.bool();
                    break;
                case 6:
                    r.allowText = e.bool();
                    break;
                case 7:
                    r.textMaxLength = f.ZQ.internalBinaryRead(e, e.uint32(), t, r.textMaxLength);
                    break;
                case 8:
                    r.excludedFromScore = e.bool();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, c.O0.Varint).uint32(e.id),
            e.text && g.X.internalBinaryWrite(e.text, n.tag(2, c.O0.LengthDelimited).fork(), t).join(),
            0 !== e.value && n.tag(3, c.O0.Bit64).double(e.value),
            !1 !== e.pinned && n.tag(4, c.O0.Varint).bool(e.pinned),
            !1 !== e.exclusive && n.tag(5, c.O0.Varint).bool(e.exclusive),
            !1 !== e.allowText && n.tag(6, c.O0.Varint).bool(e.allowText),
            e.textMaxLength &&
                f.ZQ.internalBinaryWrite(e.textMaxLength, n.tag(7, c.O0.LengthDelimited).fork(), t).join(),
            !1 !== e.excludedFromScore && n.tag(8, c.O0.Varint).bool(e.excludedFromScore));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let ee = new J();
class en extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.TextQuestion", [
            { no: 1, name: "multiline", kind: "scalar", T: 8 },
            { no: 2, name: "max_length", kind: "message", T: () => f.ZQ },
        ]);
    }
    create(e) {
        let n = { multiline: !1 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.multiline = e.bool();
                    break;
                case 2:
                    r.maxLength = f.ZQ.internalBinaryRead(e, e.uint32(), t, r.maxLength);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (!1 !== e.multiline && n.tag(1, c.O0.Varint).bool(e.multiline),
            e.maxLength && f.ZQ.internalBinaryWrite(e.maxLength, n.tag(2, c.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let et = new en();
class ei extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ScaleQuestion", [
            { no: 1, name: "min_value", kind: "scalar", T: 17 },
            { no: 2, name: "max_value", kind: "scalar", T: 17 },
            { no: 3, name: "min_label", kind: "message", T: () => g.X },
            { no: 4, name: "max_label", kind: "message", T: () => g.X },
            { no: 5, name: "nps", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let n = { minValue: 0, maxValue: 0, nps: !1 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.minValue = e.sint32();
                    break;
                case 2:
                    r.maxValue = e.sint32();
                    break;
                case 3:
                    r.minLabel = g.X.internalBinaryRead(e, e.uint32(), t, r.minLabel);
                    break;
                case 4:
                    r.maxLabel = g.X.internalBinaryRead(e, e.uint32(), t, r.maxLabel);
                    break;
                case 5:
                    r.nps = e.bool();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.minValue && n.tag(1, c.O0.Varint).sint32(e.minValue),
            0 !== e.maxValue && n.tag(2, c.O0.Varint).sint32(e.maxValue),
            e.minLabel && g.X.internalBinaryWrite(e.minLabel, n.tag(3, c.O0.LengthDelimited).fork(), t).join(),
            e.maxLabel && g.X.internalBinaryWrite(e.maxLabel, n.tag(4, c.O0.LengthDelimited).fork(), t).join(),
            !1 !== e.nps && n.tag(5, c.O0.Varint).bool(e.nps));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let er = new ei();
class ea extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.MatrixQuestion", [
            { no: 1, name: "rows", kind: "message", repeat: 1, T: () => el },
            { no: 2, name: "scale", kind: "message", repeat: 1, T: () => ee },
            { no: 3, name: "randomize_rows", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let n = { rows: [], scale: [], randomizeRows: !1 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.rows.push(el.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 2:
                    r.scale.push(ee.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 3:
                    r.randomizeRows = e.bool();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        for (let i = 0; i < e.rows.length; i++)
            el.internalBinaryWrite(e.rows[i], n.tag(1, c.O0.LengthDelimited).fork(), t).join();
        for (let i = 0; i < e.scale.length; i++)
            ee.internalBinaryWrite(e.scale[i], n.tag(2, c.O0.LengthDelimited).fork(), t).join();
        !1 !== e.randomizeRows && n.tag(3, c.O0.Varint).bool(e.randomizeRows);
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eo = new ea();
class es extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.MatrixRow", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "text", kind: "message", T: () => g.X },
            { no: 3, name: "pinned", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let n = { id: 0, pinned: !1 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.text = g.X.internalBinaryRead(e, e.uint32(), t, r.text);
                    break;
                case 3:
                    r.pinned = e.bool();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, c.O0.Varint).uint32(e.id),
            e.text && g.X.internalBinaryWrite(e.text, n.tag(2, c.O0.LengthDelimited).fork(), t).join(),
            !1 !== e.pinned && n.tag(3, c.O0.Varint).bool(e.pinned));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let el = new es();
class ed extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.InfoQuestion", []);
    }
    create(e) {
        let n = {};
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        return i ?? this.create();
    }
    internalBinaryWrite(e, n, t) {
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let ec = new ed();
class eu extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.Score", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "export_label", kind: "scalar", T: 9 },
            { no: 3, name: "terms", kind: "message", repeat: 1, T: () => ef },
            { no: 4, name: "bands", kind: "message", repeat: 1, T: () => ep },
        ]);
    }
    create(e) {
        let n = { id: 0, exportLabel: "", terms: [], bands: [] };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.exportLabel = e.string();
                    break;
                case 3:
                    r.terms.push(ef.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 4:
                    r.bands.push(ep.internalBinaryRead(e, e.uint32(), t));
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, c.O0.Varint).uint32(e.id),
            "" !== e.exportLabel && n.tag(2, c.O0.LengthDelimited).string(e.exportLabel));
        for (let i = 0; i < e.terms.length; i++)
            ef.internalBinaryWrite(e.terms[i], n.tag(3, c.O0.LengthDelimited).fork(), t).join();
        for (let i = 0; i < e.bands.length; i++)
            ep.internalBinaryWrite(e.bands[i], n.tag(4, c.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eh = new eu();
class em extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ScoreTerm", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
            { no: 2, name: "weight", kind: "message", T: () => f.$b },
        ]);
    }
    create(e) {
        let n = { questionId: 0 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.questionId = e.uint32();
                    break;
                case 2:
                    r.weight = f.$b.internalBinaryRead(e, e.uint32(), t, r.weight);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.questionId && n.tag(1, c.O0.Varint).uint32(e.questionId),
            e.weight && f.$b.internalBinaryWrite(e.weight, n.tag(2, c.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let ef = new em();
class eg extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ScoreBand", [
            { no: 1, name: "max", kind: "message", T: () => f.$b },
            { no: 2, name: "label", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let n = { label: "" };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.max = f.$b.internalBinaryRead(e, e.uint32(), t, r.max);
                    break;
                case 2:
                    r.label = e.string();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (e.max && f.$b.internalBinaryWrite(e.max, n.tag(1, c.O0.LengthDelimited).fork(), t).join(),
            "" !== e.label && n.tag(2, c.O0.LengthDelimited).string(e.label));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let ep = new eg();
class ek extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.Condition", [
            { no: 1, name: "all_of", kind: "message", oneof: "kind", T: () => eb },
            { no: 2, name: "any_of", kind: "message", oneof: "kind", T: () => eb },
            { no: 3, name: "none_of", kind: "message", oneof: "kind", T: () => eb },
            { no: 4, name: "selected", kind: "message", oneof: "kind", T: () => ev },
            { no: 5, name: "matrix_selected", kind: "message", oneof: "kind", T: () => e$ },
            { no: 6, name: "ranked_within", kind: "message", oneof: "kind", T: () => eO },
            { no: 7, name: "answered", kind: "message", oneof: "kind", T: () => eI },
            { no: 8, name: "compare", kind: "message", oneof: "kind", T: () => eL },
            { no: 10, name: "score_band", kind: "message", oneof: "kind", T: () => eU },
            { no: 11, name: "displayed", kind: "message", oneof: "kind", T: () => eR },
        ]);
    }
    create(e) {
        let n = { kind: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.kind = { oneofKind: "allOf", allOf: eb.internalBinaryRead(e, e.uint32(), t, r.kind.allOf) };
                    break;
                case 2:
                    r.kind = { oneofKind: "anyOf", anyOf: eb.internalBinaryRead(e, e.uint32(), t, r.kind.anyOf) };
                    break;
                case 3:
                    r.kind = { oneofKind: "noneOf", noneOf: eb.internalBinaryRead(e, e.uint32(), t, r.kind.noneOf) };
                    break;
                case 4:
                    r.kind = {
                        oneofKind: "selected",
                        selected: ev.internalBinaryRead(e, e.uint32(), t, r.kind.selected),
                    };
                    break;
                case 5:
                    r.kind = {
                        oneofKind: "matrixSelected",
                        matrixSelected: e$.internalBinaryRead(e, e.uint32(), t, r.kind.matrixSelected),
                    };
                    break;
                case 6:
                    r.kind = {
                        oneofKind: "rankedWithin",
                        rankedWithin: eO.internalBinaryRead(e, e.uint32(), t, r.kind.rankedWithin),
                    };
                    break;
                case 7:
                    r.kind = {
                        oneofKind: "answered",
                        answered: eI.internalBinaryRead(e, e.uint32(), t, r.kind.answered),
                    };
                    break;
                case 8:
                    r.kind = { oneofKind: "compare", compare: eL.internalBinaryRead(e, e.uint32(), t, r.kind.compare) };
                    break;
                case 10:
                    r.kind = {
                        oneofKind: "scoreBand",
                        scoreBand: eU.internalBinaryRead(e, e.uint32(), t, r.kind.scoreBand),
                    };
                    break;
                case 11:
                    r.kind = {
                        oneofKind: "displayed",
                        displayed: eR.internalBinaryRead(e, e.uint32(), t, r.kind.displayed),
                    };
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        ("allOf" === e.kind.oneofKind &&
            eb.internalBinaryWrite(e.kind.allOf, n.tag(1, c.O0.LengthDelimited).fork(), t).join(),
            "anyOf" === e.kind.oneofKind &&
                eb.internalBinaryWrite(e.kind.anyOf, n.tag(2, c.O0.LengthDelimited).fork(), t).join(),
            "noneOf" === e.kind.oneofKind &&
                eb.internalBinaryWrite(e.kind.noneOf, n.tag(3, c.O0.LengthDelimited).fork(), t).join(),
            "selected" === e.kind.oneofKind &&
                ev.internalBinaryWrite(e.kind.selected, n.tag(4, c.O0.LengthDelimited).fork(), t).join(),
            "matrixSelected" === e.kind.oneofKind &&
                e$.internalBinaryWrite(e.kind.matrixSelected, n.tag(5, c.O0.LengthDelimited).fork(), t).join(),
            "rankedWithin" === e.kind.oneofKind &&
                eO.internalBinaryWrite(e.kind.rankedWithin, n.tag(6, c.O0.LengthDelimited).fork(), t).join(),
            "answered" === e.kind.oneofKind &&
                eI.internalBinaryWrite(e.kind.answered, n.tag(7, c.O0.LengthDelimited).fork(), t).join(),
            "compare" === e.kind.oneofKind &&
                eL.internalBinaryWrite(e.kind.compare, n.tag(8, c.O0.LengthDelimited).fork(), t).join(),
            "scoreBand" === e.kind.oneofKind &&
                eU.internalBinaryWrite(e.kind.scoreBand, n.tag(10, c.O0.LengthDelimited).fork(), t).join(),
            "displayed" === e.kind.oneofKind &&
                eR.internalBinaryWrite(e.kind.displayed, n.tag(11, c.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let ey = new ek();
class ew extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ConditionList", [
            { no: 1, name: "conditions", kind: "message", repeat: 1, T: () => ey },
        ]);
    }
    create(e) {
        let n = { conditions: [] };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            if (1 === n) r.conditions.push(ey.internalBinaryRead(e, e.uint32(), t));
            else {
                let a = t.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        for (let i = 0; i < e.conditions.length; i++)
            ey.internalBinaryWrite(e.conditions[i], n.tag(1, c.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eb = new ew();
class ex extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.SelectedCondition", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
            { no: 2, name: "choice_ids", kind: "scalar", repeat: 1, T: 13 },
        ]);
    }
    create(e) {
        let n = { questionId: 0, choiceIds: [] };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.questionId = e.uint32();
                    break;
                case 2:
                    if (i === c.O0.LengthDelimited)
                        for (let n = e.int32() + e.pos; e.pos < n;) r.choiceIds.push(e.uint32());
                    else r.choiceIds.push(e.uint32());
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        if ((0 !== e.questionId && n.tag(1, c.O0.Varint).uint32(e.questionId), e.choiceIds.length)) {
            n.tag(2, c.O0.LengthDelimited).fork();
            for (let t = 0; t < e.choiceIds.length; t++) n.uint32(e.choiceIds[t]);
            n.join();
        }
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let ev = new ex();
class eT extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.MatrixSelectedCondition", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
            { no: 2, name: "row_id", kind: "scalar", T: 13 },
            { no: 3, name: "choice_ids", kind: "scalar", repeat: 1, T: 13 },
        ]);
    }
    create(e) {
        let n = { questionId: 0, rowId: 0, choiceIds: [] };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.questionId = e.uint32();
                    break;
                case 2:
                    r.rowId = e.uint32();
                    break;
                case 3:
                    if (i === c.O0.LengthDelimited)
                        for (let n = e.int32() + e.pos; e.pos < n;) r.choiceIds.push(e.uint32());
                    else r.choiceIds.push(e.uint32());
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        if (
            (0 !== e.questionId && n.tag(1, c.O0.Varint).uint32(e.questionId),
            0 !== e.rowId && n.tag(2, c.O0.Varint).uint32(e.rowId),
            e.choiceIds.length)
        ) {
            n.tag(3, c.O0.LengthDelimited).fork();
            for (let t = 0; t < e.choiceIds.length; t++) n.uint32(e.choiceIds[t]);
            n.join();
        }
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let e$ = new eT();
class ej extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RankedWithinCondition", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
            { no: 2, name: "choice_id", kind: "scalar", T: 13 },
            { no: 3, name: "top_count", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let n = { questionId: 0, choiceId: 0, topCount: 0 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.questionId = e.uint32();
                    break;
                case 2:
                    r.choiceId = e.uint32();
                    break;
                case 3:
                    r.topCount = e.uint32();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.questionId && n.tag(1, c.O0.Varint).uint32(e.questionId),
            0 !== e.choiceId && n.tag(2, c.O0.Varint).uint32(e.choiceId),
            0 !== e.topCount && n.tag(3, c.O0.Varint).uint32(e.topCount));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eO = new ej();
class eB extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.AnsweredCondition", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let n = { questionId: 0 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            if (1 === n) r.questionId = e.uint32();
            else {
                let a = t.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        0 !== e.questionId && n.tag(1, c.O0.Varint).uint32(e.questionId);
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eI = new eB();
class eN extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.DisplayedCondition", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let n = { questionId: 0 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            if (1 === n) r.questionId = e.uint32();
            else {
                let a = t.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        0 !== e.questionId && n.tag(1, c.O0.Varint).uint32(e.questionId);
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eR = new eN();
class e_ extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.CompareCondition", [
            { no: 1, name: "question_id", kind: "scalar", oneof: "target", T: 13 },
            { no: 2, name: "score_id", kind: "scalar", oneof: "target", T: 13 },
            {
                no: 3,
                name: "op",
                kind: "enum",
                T: () => ["discord_protos.discord_surveys.v1.CompareOp", k, "COMPARE_OP_"],
            },
            { no: 4, name: "value", kind: "scalar", T: 1 },
        ]);
    }
    create(e) {
        let n = { target: { oneofKind: void 0 }, op: 0, value: 0 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.target = { oneofKind: "questionId", questionId: e.uint32() };
                    break;
                case 2:
                    r.target = { oneofKind: "scoreId", scoreId: e.uint32() };
                    break;
                case 3:
                    r.op = e.int32();
                    break;
                case 4:
                    r.value = e.double();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        ("questionId" === e.target.oneofKind && n.tag(1, c.O0.Varint).uint32(e.target.questionId),
            "scoreId" === e.target.oneofKind && n.tag(2, c.O0.Varint).uint32(e.target.scoreId),
            0 !== e.op && n.tag(3, c.O0.Varint).int32(e.op),
            0 !== e.value && n.tag(4, c.O0.Bit64).double(e.value));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eL = new e_();
class eW extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ScoreBandCondition", [
            { no: 1, name: "score_id", kind: "scalar", T: 13 },
            { no: 2, name: "band_label", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let n = { scoreId: 0, bandLabel: "" };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.scoreId = e.uint32();
                    break;
                case 2:
                    r.bandLabel = e.string();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.scoreId && n.tag(1, c.O0.Varint).uint32(e.scoreId),
            "" !== e.bandLabel && n.tag(2, c.O0.LengthDelimited).string(e.bandLabel));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eU = new eW();
var eD =
        (((a = {})[(a.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (a[(a.ALL = 1)] = "ALL"),
        (a[(a.SOME = 2)] = "SOME"),
        (a[(a.NONE = 3)] = "NONE"),
        a),
    eC =
        (((o = {})[(o.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (o[(o.IN_PROGRESS = 1)] = "IN_PROGRESS"),
        (o[(o.COMPLETE = 2)] = "COMPLETE"),
        (o[(o.ENDED = 3)] = "ENDED"),
        o),
    eE =
        (((s = {})[(s.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (s[(s.REQUIRED = 1)] = "REQUIRED"),
        (s[(s.TOO_LONG = 2)] = "TOO_LONG"),
        (s[(s.TOO_FEW = 3)] = "TOO_FEW"),
        (s[(s.TOO_MANY = 4)] = "TOO_MANY"),
        (s[(s.INVALID = 5)] = "INVALID"),
        (s[(s.STALE = 6)] = "STALE"),
        s);
class eS extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.SubmitRequest", [
            { no: 1, name: "page_id", kind: "scalar", T: 13 },
            { no: 2, name: "revision", kind: "scalar", T: 13 },
            { no: 3, name: "answers", kind: "message", repeat: 1, T: () => eK },
        ]);
    }
    create(e) {
        let n = { pageId: 0, revision: 0, answers: [] };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.pageId = e.uint32();
                    break;
                case 2:
                    r.revision = e.uint32();
                    break;
                case 3:
                    r.answers.push(eK.internalBinaryRead(e, e.uint32(), t));
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.pageId && n.tag(1, c.O0.Varint).uint32(e.pageId),
            0 !== e.revision && n.tag(2, c.O0.Varint).uint32(e.revision));
        for (let i = 0; i < e.answers.length; i++)
            eK.internalBinaryWrite(e.answers[i], n.tag(3, c.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eF = new eS();
class eP extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.Answer", [
            { no: 1, name: "choices", kind: "message", oneof: "kind", T: () => eV },
            { no: 2, name: "ranked", kind: "message", oneof: "kind", T: () => eQ },
            { no: 3, name: "text", kind: "message", oneof: "kind", T: () => eM },
            { no: 4, name: "number", kind: "message", oneof: "kind", T: () => ez },
            { no: 5, name: "matrix", kind: "message", oneof: "kind", T: () => eY },
            { no: 6, name: "conjoint", kind: "message", oneof: "kind", T: () => e1 },
            { no: 7, name: "maxdiff", kind: "message", oneof: "kind", T: () => e3 },
        ]);
    }
    create(e) {
        let n = { kind: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.kind = { oneofKind: "choices", choices: eV.internalBinaryRead(e, e.uint32(), t, r.kind.choices) };
                    break;
                case 2:
                    r.kind = { oneofKind: "ranked", ranked: eQ.internalBinaryRead(e, e.uint32(), t, r.kind.ranked) };
                    break;
                case 3:
                    r.kind = { oneofKind: "text", text: eM.internalBinaryRead(e, e.uint32(), t, r.kind.text) };
                    break;
                case 4:
                    r.kind = { oneofKind: "number", number: ez.internalBinaryRead(e, e.uint32(), t, r.kind.number) };
                    break;
                case 5:
                    r.kind = { oneofKind: "matrix", matrix: eY.internalBinaryRead(e, e.uint32(), t, r.kind.matrix) };
                    break;
                case 6:
                    r.kind = {
                        oneofKind: "conjoint",
                        conjoint: e1.internalBinaryRead(e, e.uint32(), t, r.kind.conjoint),
                    };
                    break;
                case 7:
                    r.kind = { oneofKind: "maxdiff", maxdiff: e3.internalBinaryRead(e, e.uint32(), t, r.kind.maxdiff) };
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        ("choices" === e.kind.oneofKind &&
            eV.internalBinaryWrite(e.kind.choices, n.tag(1, c.O0.LengthDelimited).fork(), t).join(),
            "ranked" === e.kind.oneofKind &&
                eQ.internalBinaryWrite(e.kind.ranked, n.tag(2, c.O0.LengthDelimited).fork(), t).join(),
            "text" === e.kind.oneofKind &&
                eM.internalBinaryWrite(e.kind.text, n.tag(3, c.O0.LengthDelimited).fork(), t).join(),
            "number" === e.kind.oneofKind &&
                ez.internalBinaryWrite(e.kind.number, n.tag(4, c.O0.LengthDelimited).fork(), t).join(),
            "matrix" === e.kind.oneofKind &&
                eY.internalBinaryWrite(e.kind.matrix, n.tag(5, c.O0.LengthDelimited).fork(), t).join(),
            "conjoint" === e.kind.oneofKind &&
                e1.internalBinaryWrite(e.kind.conjoint, n.tag(6, c.O0.LengthDelimited).fork(), t).join(),
            "maxdiff" === e.kind.oneofKind &&
                e3.internalBinaryWrite(e.kind.maxdiff, n.tag(7, c.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eK = new eP();
class eq extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ChoicesAnswer", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
            { no: 2, name: "choice_ids", kind: "scalar", repeat: 1, T: 13 },
            { no: 3, name: "text_by_choice_id", kind: "map", K: 13, V: { kind: "scalar", T: 9 } },
        ]);
    }
    create(e) {
        let n = { questionId: 0, choiceIds: [], textByChoiceId: {} };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.questionId = e.uint32();
                    break;
                case 2:
                    if (i === c.O0.LengthDelimited)
                        for (let n = e.int32() + e.pos; e.pos < n;) r.choiceIds.push(e.uint32());
                    else r.choiceIds.push(e.uint32());
                    break;
                case 3:
                    this.binaryReadMap3(r.textByChoiceId, e, t);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    binaryReadMap3(e, n, t) {
        let i = n.uint32(),
            r = n.pos + i,
            a,
            o;
        for (; n.pos < r;) {
            let [e, t] = n.tag();
            switch (e) {
                case 1:
                    a = n.uint32();
                    break;
                case 2:
                    o = n.string();
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_surveys.v1.ChoicesAnswer.text_by_choice_id",
                    );
            }
        }
        e[a ?? 0] = o ?? "";
    }
    internalBinaryWrite(e, n, t) {
        if ((0 !== e.questionId && n.tag(1, c.O0.Varint).uint32(e.questionId), e.choiceIds.length)) {
            n.tag(2, c.O0.LengthDelimited).fork();
            for (let t = 0; t < e.choiceIds.length; t++) n.uint32(e.choiceIds[t]);
            n.join();
        }
        for (let t of Object.keys(e.textByChoiceId))
            n.tag(3, c.O0.LengthDelimited)
                .fork()
                .tag(1, c.O0.Varint)
                .uint32(parseInt(t))
                .tag(2, c.O0.LengthDelimited)
                .string(e.textByChoiceId[t])
                .join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eV = new eq();
class eG extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RankedAnswer", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
            { no: 2, name: "ranked_choice_ids", kind: "scalar", repeat: 1, T: 13 },
        ]);
    }
    create(e) {
        let n = { questionId: 0, rankedChoiceIds: [] };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.questionId = e.uint32();
                    break;
                case 2:
                    if (i === c.O0.LengthDelimited)
                        for (let n = e.int32() + e.pos; e.pos < n;) r.rankedChoiceIds.push(e.uint32());
                    else r.rankedChoiceIds.push(e.uint32());
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        if ((0 !== e.questionId && n.tag(1, c.O0.Varint).uint32(e.questionId), e.rankedChoiceIds.length)) {
            n.tag(2, c.O0.LengthDelimited).fork();
            for (let t = 0; t < e.rankedChoiceIds.length; t++) n.uint32(e.rankedChoiceIds[t]);
            n.join();
        }
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eQ = new eG();
class eA extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.TextAnswer", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
            { no: 2, name: "text", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let n = { questionId: 0, text: "" };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.questionId = e.uint32();
                    break;
                case 2:
                    r.text = e.string();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.questionId && n.tag(1, c.O0.Varint).uint32(e.questionId),
            "" !== e.text && n.tag(2, c.O0.LengthDelimited).string(e.text));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eM = new eA();
class eX extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.NumberAnswer", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
            { no: 2, name: "value", kind: "scalar", T: 17 },
        ]);
    }
    create(e) {
        let n = { questionId: 0, value: 0 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.questionId = e.uint32();
                    break;
                case 2:
                    r.value = e.sint32();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.questionId && n.tag(1, c.O0.Varint).uint32(e.questionId),
            0 !== e.value && n.tag(2, c.O0.Varint).sint32(e.value));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let ez = new eX();
class eZ extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.MatrixAnswer", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
            { no: 2, name: "rows", kind: "message", repeat: 1, T: () => eJ },
        ]);
    }
    create(e) {
        let n = { questionId: 0, rows: [] };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.questionId = e.uint32();
                    break;
                case 2:
                    r.rows.push(eJ.internalBinaryRead(e, e.uint32(), t));
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        0 !== e.questionId && n.tag(1, c.O0.Varint).uint32(e.questionId);
        for (let i = 0; i < e.rows.length; i++)
            eJ.internalBinaryWrite(e.rows[i], n.tag(2, c.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eY = new eZ();
class eH extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.MatrixRowAnswer", [
            { no: 1, name: "row_id", kind: "scalar", T: 13 },
            { no: 2, name: "choice_id", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let n = { rowId: 0, choiceId: 0 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.rowId = e.uint32();
                    break;
                case 2:
                    r.choiceId = e.uint32();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.rowId && n.tag(1, c.O0.Varint).uint32(e.rowId),
            0 !== e.choiceId && n.tag(2, c.O0.Varint).uint32(e.choiceId));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eJ = new eH();
class e0 extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ConjointAnswer", [
            { no: 1, name: "page_id", kind: "scalar", T: 13 },
            { no: 2, name: "chosen_concept_indexes", kind: "scalar", repeat: 1, T: 17 },
        ]);
    }
    create(e) {
        let n = { pageId: 0, chosenConceptIndexes: [] };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.pageId = e.uint32();
                    break;
                case 2:
                    if (i === c.O0.LengthDelimited)
                        for (let n = e.int32() + e.pos; e.pos < n;) r.chosenConceptIndexes.push(e.sint32());
                    else r.chosenConceptIndexes.push(e.sint32());
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        if ((0 !== e.pageId && n.tag(1, c.O0.Varint).uint32(e.pageId), e.chosenConceptIndexes.length)) {
            n.tag(2, c.O0.LengthDelimited).fork();
            for (let t = 0; t < e.chosenConceptIndexes.length; t++) n.sint32(e.chosenConceptIndexes[t]);
            n.join();
        }
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let e1 = new e0();
class e2 extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.MaxDiffAnswer", [
            { no: 1, name: "page_id", kind: "scalar", T: 13 },
            { no: 2, name: "picks_per_set", kind: "message", repeat: 1, T: () => e5 },
            {
                no: 3,
                name: "anchor",
                kind: "enum",
                T: () => ["discord_protos.discord_surveys.v1.MaxDiffAnchor", eD, "MAX_DIFF_ANCHOR_"],
            },
        ]);
    }
    create(e) {
        let n = { pageId: 0, picksPerSet: [], anchor: 0 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.pageId = e.uint32();
                    break;
                case 2:
                    r.picksPerSet.push(e5.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 3:
                    r.anchor = e.int32();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        0 !== e.pageId && n.tag(1, c.O0.Varint).uint32(e.pageId);
        for (let i = 0; i < e.picksPerSet.length; i++)
            e5.internalBinaryWrite(e.picksPerSet[i], n.tag(2, c.O0.LengthDelimited).fork(), t).join();
        0 !== e.anchor && n.tag(3, c.O0.Varint).int32(e.anchor);
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let e3 = new e2();
class e4 extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.MaxDiffPick", [
            { no: 1, name: "most_item_id", kind: "scalar", T: 13 },
            { no: 2, name: "least_item_id", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let n = { mostItemId: 0, leastItemId: 0 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.mostItemId = e.uint32();
                    break;
                case 2:
                    r.leastItemId = e.uint32();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.mostItemId && n.tag(1, c.O0.Varint).uint32(e.mostItemId),
            0 !== e.leastItemId && n.tag(2, c.O0.Varint).uint32(e.leastItemId));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let e5 = new e4();
class e8 extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedPage", [
            {
                no: 1,
                name: "status",
                kind: "enum",
                T: () => ["discord_protos.discord_surveys.v1.SessionStatus", eC, "SESSION_STATUS_"],
            },
            { no: 2, name: "page_id", kind: "scalar", T: 13 },
            { no: 3, name: "revision", kind: "scalar", T: 13 },
            { no: 4, name: "progress", kind: "message", T: () => e7 },
            { no: 5, name: "questions", kind: "message", oneof: "content", T: () => ni },
            { no: 6, name: "conjoint", kind: "message", oneof: "content", T: () => nT },
            { no: 7, name: "maxdiff", kind: "message", oneof: "content", T: () => nW },
            { no: 8, name: "end_message", kind: "scalar", T: 9 },
            { no: 9, name: "submitted_answers", kind: "message", repeat: 1, T: () => eK },
            { no: 10, name: "errors", kind: "message", repeat: 1, T: () => nn },
        ]);
    }
    create(e) {
        let n = {
            status: 0,
            pageId: 0,
            revision: 0,
            content: { oneofKind: void 0 },
            endMessage: "",
            submittedAnswers: [],
            errors: [],
        };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.status = e.int32();
                    break;
                case 2:
                    r.pageId = e.uint32();
                    break;
                case 3:
                    r.revision = e.uint32();
                    break;
                case 4:
                    r.progress = e7.internalBinaryRead(e, e.uint32(), t, r.progress);
                    break;
                case 5:
                    r.content = {
                        oneofKind: "questions",
                        questions: ni.internalBinaryRead(e, e.uint32(), t, r.content.questions),
                    };
                    break;
                case 6:
                    r.content = {
                        oneofKind: "conjoint",
                        conjoint: nT.internalBinaryRead(e, e.uint32(), t, r.content.conjoint),
                    };
                    break;
                case 7:
                    r.content = {
                        oneofKind: "maxdiff",
                        maxdiff: nW.internalBinaryRead(e, e.uint32(), t, r.content.maxdiff),
                    };
                    break;
                case 8:
                    r.endMessage = e.string();
                    break;
                case 9:
                    r.submittedAnswers.push(eK.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 10:
                    r.errors.push(nn.internalBinaryRead(e, e.uint32(), t));
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.status && n.tag(1, c.O0.Varint).int32(e.status),
            0 !== e.pageId && n.tag(2, c.O0.Varint).uint32(e.pageId),
            0 !== e.revision && n.tag(3, c.O0.Varint).uint32(e.revision),
            e.progress && e7.internalBinaryWrite(e.progress, n.tag(4, c.O0.LengthDelimited).fork(), t).join(),
            "questions" === e.content.oneofKind &&
                ni.internalBinaryWrite(e.content.questions, n.tag(5, c.O0.LengthDelimited).fork(), t).join(),
            "conjoint" === e.content.oneofKind &&
                nT.internalBinaryWrite(e.content.conjoint, n.tag(6, c.O0.LengthDelimited).fork(), t).join(),
            "maxdiff" === e.content.oneofKind &&
                nW.internalBinaryWrite(e.content.maxdiff, n.tag(7, c.O0.LengthDelimited).fork(), t).join(),
            "" !== e.endMessage && n.tag(8, c.O0.LengthDelimited).string(e.endMessage));
        for (let i = 0; i < e.submittedAnswers.length; i++)
            eK.internalBinaryWrite(e.submittedAnswers[i], n.tag(9, c.O0.LengthDelimited).fork(), t).join();
        for (let i = 0; i < e.errors.length; i++)
            nn.internalBinaryWrite(e.errors[i], n.tag(10, c.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let e9 = new e8();
class e6 extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.Progress", [
            { no: 1, name: "page_index", kind: "scalar", T: 13 },
            { no: 2, name: "estimated_page_count", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let n = { pageIndex: 0, estimatedPageCount: 0 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.pageIndex = e.uint32();
                    break;
                case 2:
                    r.estimatedPageCount = e.uint32();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.pageIndex && n.tag(1, c.O0.Varint).uint32(e.pageIndex),
            0 !== e.estimatedPageCount && n.tag(2, c.O0.Varint).uint32(e.estimatedPageCount));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let e7 = new e6();
class ne extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.SubmitError", [
            { no: 1, name: "page_id", kind: "scalar", T: 13 },
            { no: 2, name: "question_id", kind: "scalar", T: 13 },
            { no: 3, name: "row_id", kind: "scalar", T: 13 },
            { no: 4, name: "choice_id", kind: "scalar", T: 13 },
            {
                no: 5,
                name: "code",
                kind: "enum",
                T: () => ["discord_protos.discord_surveys.v1.SubmitErrorCode", eE, "SUBMIT_ERROR_CODE_"],
            },
            { no: 6, name: "message", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let n = { pageId: 0, questionId: 0, rowId: 0, choiceId: 0, code: 0, message: "" };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.pageId = e.uint32();
                    break;
                case 2:
                    r.questionId = e.uint32();
                    break;
                case 3:
                    r.rowId = e.uint32();
                    break;
                case 4:
                    r.choiceId = e.uint32();
                    break;
                case 5:
                    r.code = e.int32();
                    break;
                case 6:
                    r.message = e.string();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.pageId && n.tag(1, c.O0.Varint).uint32(e.pageId),
            0 !== e.questionId && n.tag(2, c.O0.Varint).uint32(e.questionId),
            0 !== e.rowId && n.tag(3, c.O0.Varint).uint32(e.rowId),
            0 !== e.choiceId && n.tag(4, c.O0.Varint).uint32(e.choiceId),
            0 !== e.code && n.tag(5, c.O0.Varint).int32(e.code),
            "" !== e.message && n.tag(6, c.O0.LengthDelimited).string(e.message));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nn = new ne();
class nt extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedQuestionList", [
            { no: 1, name: "questions", kind: "message", repeat: 1, T: () => na },
        ]);
    }
    create(e) {
        let n = { questions: [] };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            if (1 === n) r.questions.push(na.internalBinaryRead(e, e.uint32(), t));
            else {
                let a = t.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        for (let i = 0; i < e.questions.length; i++)
            na.internalBinaryWrite(e.questions[i], n.tag(1, c.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let ni = new nt();
class nr extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedQuestion", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "text", kind: "scalar", T: 9 },
            { no: 3, name: "required", kind: "scalar", T: 8 },
            { no: 4, name: "single_choice", kind: "message", oneof: "kind", T: () => ns },
            { no: 5, name: "dropdown", kind: "message", oneof: "kind", T: () => ns },
            { no: 6, name: "multi_choice", kind: "message", oneof: "kind", T: () => ns },
            { no: 7, name: "rank", kind: "message", oneof: "kind", T: () => nm },
            { no: 8, name: "free_text", kind: "message", oneof: "kind", T: () => ng },
            { no: 9, name: "scale", kind: "message", oneof: "kind", T: () => nk },
            { no: 10, name: "matrix", kind: "message", oneof: "kind", T: () => nw },
            { no: 11, name: "info", kind: "message", oneof: "kind", T: () => nx },
        ]);
    }
    create(e) {
        let n = { id: 0, text: "", required: !1, kind: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.text = e.string();
                    break;
                case 3:
                    r.required = e.bool();
                    break;
                case 4:
                    r.kind = {
                        oneofKind: "singleChoice",
                        singleChoice: ns.internalBinaryRead(e, e.uint32(), t, r.kind.singleChoice),
                    };
                    break;
                case 5:
                    r.kind = {
                        oneofKind: "dropdown",
                        dropdown: ns.internalBinaryRead(e, e.uint32(), t, r.kind.dropdown),
                    };
                    break;
                case 6:
                    r.kind = {
                        oneofKind: "multiChoice",
                        multiChoice: ns.internalBinaryRead(e, e.uint32(), t, r.kind.multiChoice),
                    };
                    break;
                case 7:
                    r.kind = { oneofKind: "rank", rank: nm.internalBinaryRead(e, e.uint32(), t, r.kind.rank) };
                    break;
                case 8:
                    r.kind = {
                        oneofKind: "freeText",
                        freeText: ng.internalBinaryRead(e, e.uint32(), t, r.kind.freeText),
                    };
                    break;
                case 9:
                    r.kind = { oneofKind: "scale", scale: nk.internalBinaryRead(e, e.uint32(), t, r.kind.scale) };
                    break;
                case 10:
                    r.kind = { oneofKind: "matrix", matrix: nw.internalBinaryRead(e, e.uint32(), t, r.kind.matrix) };
                    break;
                case 11:
                    r.kind = { oneofKind: "info", info: nx.internalBinaryRead(e, e.uint32(), t, r.kind.info) };
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, c.O0.Varint).uint32(e.id),
            "" !== e.text && n.tag(2, c.O0.LengthDelimited).string(e.text),
            !1 !== e.required && n.tag(3, c.O0.Varint).bool(e.required),
            "singleChoice" === e.kind.oneofKind &&
                ns.internalBinaryWrite(e.kind.singleChoice, n.tag(4, c.O0.LengthDelimited).fork(), t).join(),
            "dropdown" === e.kind.oneofKind &&
                ns.internalBinaryWrite(e.kind.dropdown, n.tag(5, c.O0.LengthDelimited).fork(), t).join(),
            "multiChoice" === e.kind.oneofKind &&
                ns.internalBinaryWrite(e.kind.multiChoice, n.tag(6, c.O0.LengthDelimited).fork(), t).join(),
            "rank" === e.kind.oneofKind &&
                nm.internalBinaryWrite(e.kind.rank, n.tag(7, c.O0.LengthDelimited).fork(), t).join(),
            "freeText" === e.kind.oneofKind &&
                ng.internalBinaryWrite(e.kind.freeText, n.tag(8, c.O0.LengthDelimited).fork(), t).join(),
            "scale" === e.kind.oneofKind &&
                nk.internalBinaryWrite(e.kind.scale, n.tag(9, c.O0.LengthDelimited).fork(), t).join(),
            "matrix" === e.kind.oneofKind &&
                nw.internalBinaryWrite(e.kind.matrix, n.tag(10, c.O0.LengthDelimited).fork(), t).join(),
            "info" === e.kind.oneofKind &&
                nx.internalBinaryWrite(e.kind.info, n.tag(11, c.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let na = new nr();
class no extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedChoiceQuestion", [
            { no: 1, name: "choices", kind: "message", repeat: 1, T: () => nd },
            { no: 2, name: "min_selected", kind: "message", T: () => f.ZQ },
            { no: 3, name: "max_selected", kind: "message", T: () => f.ZQ },
        ]);
    }
    create(e) {
        let n = { choices: [] };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.choices.push(nd.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 2:
                    r.minSelected = f.ZQ.internalBinaryRead(e, e.uint32(), t, r.minSelected);
                    break;
                case 3:
                    r.maxSelected = f.ZQ.internalBinaryRead(e, e.uint32(), t, r.maxSelected);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        for (let i = 0; i < e.choices.length; i++)
            nd.internalBinaryWrite(e.choices[i], n.tag(1, c.O0.LengthDelimited).fork(), t).join();
        (e.minSelected && f.ZQ.internalBinaryWrite(e.minSelected, n.tag(2, c.O0.LengthDelimited).fork(), t).join(),
            e.maxSelected && f.ZQ.internalBinaryWrite(e.maxSelected, n.tag(3, c.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let ns = new no();
class nl extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedChoice", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "text", kind: "scalar", T: 9 },
            { no: 3, name: "exclusive", kind: "scalar", T: 8 },
            { no: 4, name: "allow_text", kind: "scalar", T: 8 },
            { no: 5, name: "text_max_length", kind: "message", T: () => f.ZQ },
        ]);
    }
    create(e) {
        let n = { id: 0, text: "", exclusive: !1, allowText: !1 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.text = e.string();
                    break;
                case 3:
                    r.exclusive = e.bool();
                    break;
                case 4:
                    r.allowText = e.bool();
                    break;
                case 5:
                    r.textMaxLength = f.ZQ.internalBinaryRead(e, e.uint32(), t, r.textMaxLength);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, c.O0.Varint).uint32(e.id),
            "" !== e.text && n.tag(2, c.O0.LengthDelimited).string(e.text),
            !1 !== e.exclusive && n.tag(3, c.O0.Varint).bool(e.exclusive),
            !1 !== e.allowText && n.tag(4, c.O0.Varint).bool(e.allowText),
            e.textMaxLength &&
                f.ZQ.internalBinaryWrite(e.textMaxLength, n.tag(5, c.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nd = new nl();
class nc extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedOption", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "text", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let n = { id: 0, text: "" };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.text = e.string();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, c.O0.Varint).uint32(e.id),
            "" !== e.text && n.tag(2, c.O0.LengthDelimited).string(e.text));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nu = new nc();
class nh extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedRankQuestion", [
            { no: 1, name: "choices", kind: "message", repeat: 1, T: () => nu },
            { no: 2, name: "rank_top", kind: "message", T: () => f.ZQ },
        ]);
    }
    create(e) {
        let n = { choices: [] };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.choices.push(nu.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 2:
                    r.rankTop = f.ZQ.internalBinaryRead(e, e.uint32(), t, r.rankTop);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        for (let i = 0; i < e.choices.length; i++)
            nu.internalBinaryWrite(e.choices[i], n.tag(1, c.O0.LengthDelimited).fork(), t).join();
        e.rankTop && f.ZQ.internalBinaryWrite(e.rankTop, n.tag(2, c.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nm = new nh();
class nf extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedTextQuestion", [
            { no: 1, name: "multiline", kind: "scalar", T: 8 },
            { no: 2, name: "max_length", kind: "message", T: () => f.ZQ },
        ]);
    }
    create(e) {
        let n = { multiline: !1 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.multiline = e.bool();
                    break;
                case 2:
                    r.maxLength = f.ZQ.internalBinaryRead(e, e.uint32(), t, r.maxLength);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (!1 !== e.multiline && n.tag(1, c.O0.Varint).bool(e.multiline),
            e.maxLength && f.ZQ.internalBinaryWrite(e.maxLength, n.tag(2, c.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let ng = new nf();
class np extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedScaleQuestion", [
            { no: 1, name: "min_value", kind: "scalar", T: 17 },
            { no: 2, name: "max_value", kind: "scalar", T: 17 },
            { no: 3, name: "min_label", kind: "scalar", T: 9 },
            { no: 4, name: "max_label", kind: "scalar", T: 9 },
            { no: 5, name: "nps", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let n = { minValue: 0, maxValue: 0, minLabel: "", maxLabel: "", nps: !1 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.minValue = e.sint32();
                    break;
                case 2:
                    r.maxValue = e.sint32();
                    break;
                case 3:
                    r.minLabel = e.string();
                    break;
                case 4:
                    r.maxLabel = e.string();
                    break;
                case 5:
                    r.nps = e.bool();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.minValue && n.tag(1, c.O0.Varint).sint32(e.minValue),
            0 !== e.maxValue && n.tag(2, c.O0.Varint).sint32(e.maxValue),
            "" !== e.minLabel && n.tag(3, c.O0.LengthDelimited).string(e.minLabel),
            "" !== e.maxLabel && n.tag(4, c.O0.LengthDelimited).string(e.maxLabel),
            !1 !== e.nps && n.tag(5, c.O0.Varint).bool(e.nps));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nk = new np();
class ny extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedMatrixQuestion", [
            { no: 1, name: "rows", kind: "message", repeat: 1, T: () => nu },
            { no: 2, name: "scale", kind: "message", repeat: 1, T: () => nu },
        ]);
    }
    create(e) {
        let n = { rows: [], scale: [] };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.rows.push(nu.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 2:
                    r.scale.push(nu.internalBinaryRead(e, e.uint32(), t));
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        for (let i = 0; i < e.rows.length; i++)
            nu.internalBinaryWrite(e.rows[i], n.tag(1, c.O0.LengthDelimited).fork(), t).join();
        for (let i = 0; i < e.scale.length; i++)
            nu.internalBinaryWrite(e.scale[i], n.tag(2, c.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nw = new ny();
class nb extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedInfoQuestion", []);
    }
    create(e) {
        let n = {};
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        return i ?? this.create();
    }
    internalBinaryWrite(e, n, t) {
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nx = new nb();
class nv extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedConjoint", [
            { no: 1, name: "text", kind: "scalar", T: 9 },
            {
                no: 2,
                name: "display",
                kind: "enum",
                T: () => ["discord_protos.discord_surveys.v1.ConjointDisplay", p, "CONJOINT_DISPLAY_"],
            },
            { no: 3, name: "features", kind: "message", repeat: 1, T: () => nj },
            { no: 4, name: "tasks", kind: "message", repeat: 1, T: () => nB },
            { no: 5, name: "include_none_option", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let n = { text: "", display: 0, features: [], tasks: [], includeNoneOption: !1 };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.text = e.string();
                    break;
                case 2:
                    r.display = e.int32();
                    break;
                case 3:
                    r.features.push(nj.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 4:
                    r.tasks.push(nB.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 5:
                    r.includeNoneOption = e.bool();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        ("" !== e.text && n.tag(1, c.O0.LengthDelimited).string(e.text),
            0 !== e.display && n.tag(2, c.O0.Varint).int32(e.display));
        for (let i = 0; i < e.features.length; i++)
            nj.internalBinaryWrite(e.features[i], n.tag(3, c.O0.LengthDelimited).fork(), t).join();
        for (let i = 0; i < e.tasks.length; i++)
            nB.internalBinaryWrite(e.tasks[i], n.tag(4, c.O0.LengthDelimited).fork(), t).join();
        !1 !== e.includeNoneOption && n.tag(5, c.O0.Varint).bool(e.includeNoneOption);
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nT = new nv();
class n$ extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedConjointFeature", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "label", kind: "scalar", T: 9 },
            { no: 3, name: "price_currency", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let n = { id: 0, label: "", priceCurrency: "" };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.label = e.string();
                    break;
                case 3:
                    r.priceCurrency = e.string();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, c.O0.Varint).uint32(e.id),
            "" !== e.label && n.tag(2, c.O0.LengthDelimited).string(e.label),
            "" !== e.priceCurrency && n.tag(3, c.O0.LengthDelimited).string(e.priceCurrency));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nj = new n$();
class nO extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedConjointTask", [
            { no: 1, name: "concepts", kind: "message", repeat: 1, T: () => nN },
        ]);
    }
    create(e) {
        let n = { concepts: [] };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            if (1 === n) r.concepts.push(nN.internalBinaryRead(e, e.uint32(), t));
            else {
                let a = t.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        for (let i = 0; i < e.concepts.length; i++)
            nN.internalBinaryWrite(e.concepts[i], n.tag(1, c.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nB = new nO();
class nI extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedConjointConcept", [
            { no: 1, name: "label", kind: "scalar", T: 9 },
            { no: 2, name: "levels", kind: "message", repeat: 1, T: () => n_ },
        ]);
    }
    create(e) {
        let n = { label: "", levels: [] };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.label = e.string();
                    break;
                case 2:
                    r.levels.push(n_.internalBinaryRead(e, e.uint32(), t));
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        "" !== e.label && n.tag(1, c.O0.LengthDelimited).string(e.label);
        for (let i = 0; i < e.levels.length; i++)
            n_.internalBinaryWrite(e.levels[i], n.tag(2, c.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nN = new nI();
class nR extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedConjointLevel", [
            { no: 1, name: "text", kind: "scalar", T: 9 },
            { no: 2, name: "image_url", kind: "scalar", T: 9 },
            { no: 3, name: "image_alt_text", kind: "scalar", T: 9 },
            { no: 4, name: "price", kind: "message", T: () => f.$b },
        ]);
    }
    create(e) {
        let n = { text: "", imageUrl: "", imageAltText: "" };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.text = e.string();
                    break;
                case 2:
                    r.imageUrl = e.string();
                    break;
                case 3:
                    r.imageAltText = e.string();
                    break;
                case 4:
                    r.price = f.$b.internalBinaryRead(e, e.uint32(), t, r.price);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        ("" !== e.text && n.tag(1, c.O0.LengthDelimited).string(e.text),
            "" !== e.imageUrl && n.tag(2, c.O0.LengthDelimited).string(e.imageUrl),
            "" !== e.imageAltText && n.tag(3, c.O0.LengthDelimited).string(e.imageAltText),
            e.price && f.$b.internalBinaryWrite(e.price, n.tag(4, c.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let n_ = new nR();
class nL extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedMaxDiff", [
            { no: 1, name: "text", kind: "scalar", T: 9 },
            { no: 2, name: "most_label", kind: "scalar", T: 9 },
            { no: 3, name: "least_label", kind: "scalar", T: 9 },
            { no: 4, name: "sets", kind: "message", repeat: 1, T: () => nD },
            { no: 5, name: "anchor_question_text", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let n = { text: "", mostLabel: "", leastLabel: "", sets: [], anchorQuestionText: "" };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.text = e.string();
                    break;
                case 2:
                    r.mostLabel = e.string();
                    break;
                case 3:
                    r.leastLabel = e.string();
                    break;
                case 4:
                    r.sets.push(nD.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 5:
                    r.anchorQuestionText = e.string();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        ("" !== e.text && n.tag(1, c.O0.LengthDelimited).string(e.text),
            "" !== e.mostLabel && n.tag(2, c.O0.LengthDelimited).string(e.mostLabel),
            "" !== e.leastLabel && n.tag(3, c.O0.LengthDelimited).string(e.leastLabel));
        for (let i = 0; i < e.sets.length; i++)
            nD.internalBinaryWrite(e.sets[i], n.tag(4, c.O0.LengthDelimited).fork(), t).join();
        "" !== e.anchorQuestionText && n.tag(5, c.O0.LengthDelimited).string(e.anchorQuestionText);
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nW = new nL();
class nU extends m.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedMaxDiffSet", [
            { no: 1, name: "items", kind: "message", repeat: 1, T: () => nu },
        ]);
    }
    create(e) {
        let n = { items: [] };
        return (
            globalThis.Object.defineProperty(n, h.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, u.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            if (1 === n) r.items.push(nu.internalBinaryRead(e, e.uint32(), t));
            else {
                let a = t.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? c.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        for (let i = 0; i < e.items.length; i++)
            nu.internalBinaryWrite(e.items[i], n.tag(1, c.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? c.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nD = new nU();
var nC = t(691885),
    nE = t(821609),
    nS = t(834730);
function nF(e) {
    let { kind: n } = e;
    switch (n.oneofKind) {
        case "conjoint":
            return n.conjoint.pageId;
        case "maxdiff":
            return n.maxdiff.pageId;
        case "choices":
            return n.choices.questionId;
        case "ranked":
            return n.ranked.questionId;
        case "text":
            return n.text.questionId;
        case "number":
            return n.number.questionId;
        case "matrix":
            return n.matrix.questionId;
        case void 0:
            return 0;
    }
}
function nP(e, n) {
    return e.answers.find((e) => nF(e) === n);
}
function nK(e) {
    let n = e.errors.some((e) => {
        let { code: n } = e;
        return n === eE.STALE;
    });
    return eF.create({ pageId: e.pageId, revision: e.revision, answers: n ? [] : e.submittedAnswers });
}
function nq(e) {
    return Array.from(e).length;
}
var nV = t(911608),
    nG = t(683071),
    nQ = t(95477),
    nA = t(771871),
    nM = t(150934),
    nX = t(140735),
    nz = t(873631),
    nZ = t(792996);
function nY(e) {
    return `native-survey-question-${e}`;
}
let nH = "native-survey-page-errors";
function nJ(e, n) {
    let { content: t } = n,
        i =
            "questions" === t.oneofKind
                ? t.questions.questions.find((n) => {
                      let { id: t } = n;
                      return t === e.questionId;
                  })?.kind
                : void 0;
    if ("conjoint" === t.oneofKind) return nZ.intl.string(nz.default.BrvdvV);
    if ("maxdiff" === t.oneofKind) return nZ.intl.string(nz.default.soVhAf);
    switch (e.code) {
        case eE.REQUIRED:
            if (0 !== e.choiceId) return nZ.intl.string(nz.default.vYs6bp);
            return nZ.intl.string(0 !== e.rowId ? nz.default.LkpNt8 : nz.default.S0yew2);
        case eE.TOO_LONG:
            return nZ.intl.string(nz.default.UvbGfF);
        case eE.TOO_FEW:
        case eE.TOO_MANY: {
            let n = e.code === eE.TOO_FEW;
            if (i?.oneofKind === "rank")
                return nZ.intl.formatToPlainString(nz.default["3ncMZW"], {
                    count: i.rank.rankTop?.value ?? i.rank.choices.length,
                });
            if (i?.oneofKind === "multiChoice") {
                let e = n ? i.multiChoice.minSelected : i.multiChoice.maxSelected;
                if (null != e)
                    return nZ.intl.formatToPlainString(n ? nz.default.BE1zNg : nz.default.WapWNF, { count: e.value });
            }
            return nZ.intl.string(nz.default["6vETgO"]);
        }
        default:
            return nZ.intl.string(nz.default["6vETgO"]);
    }
}
var n0 = t(752356);
function n1(e) {
    let { question: n, hint: t, errors: i, page: r, labelId: a, errorId: o, children: s } = e,
        d = i.filter((e) => {
            let { rowId: n, choiceId: t } = e;
            return 0 === n && 0 === t;
        });
    return (0, l.jsxs)("div", {
        id: nY(n.id),
        role: "group",
        className: n0.b1,
        tabIndex: -1,
        "aria-labelledby": a,
        "aria-describedby": d.length > 0 ? o : void 0,
        "aria-invalid": i.length > 0 || void 0,
        children: [
            (0, l.jsxs)(nS.E, {
                id: a,
                variant: "body-md/semibold",
                color: "text-strong",
                className: n0.mD,
                children: [
                    (0, l.jsx)("span", { dir: "auto", children: n.text }),
                    n.required &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("span", { className: n0.Zy, "aria-hidden": !0, children: "*" }),
                                (0, l.jsx)(nX.A, { children: nZ.intl.string(nz.default["9bYdRi"]) }),
                            ],
                        }),
                ],
            }),
            null != t && "" !== t && (0, l.jsx)(nS.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
            s,
            d.length > 0 &&
                (0, l.jsx)(nS.E, {
                    id: o,
                    variant: "body-sm/medium",
                    color: "text-feedback-critical",
                    children: d.map((e) => nJ(e, r)).join(" "),
                }),
        ],
    });
}
function n2(e, n, t) {
    let i = e.find((e) => {
        let { rowId: n, choiceId: i } = e;
        return (null != t.rowId && n === t.rowId) || (null != t.choiceId && 0 === n && i === t.choiceId);
    });
    return null != i ? nJ(i, n) : null;
}
function n3(e) {
    let n,
        { question: t, body: i, answer: r, onChange: a, errors: o, page: s, labelId: c, variant: u } = e,
        h = r?.choiceIds ?? [],
        m = r?.textByChoiceId ?? {};
    function f(e) {
        if (0 === e.length) return a(null);
        let n = {};
        for (let t of e) null != m[t] && (n[t] = m[t]);
        return a({ questionId: t.id, choiceIds: e, textByChoiceId: n });
    }
    function g(e) {
        return (0, l.jsx)(
            "div",
            {
                className: "dropdown" === u ? void 0 : n0.Vq,
                children: (0, l.jsx)(nQ.k, {
                    label: nZ.intl.formatToPlainString(nz.default.Q2yZXD, { choice: e.text }),
                    value: m[e.id] ?? "",
                    onChange: (n) => {
                        var i;
                        let r;
                        return (
                            (i = e.id),
                            (r = { ...m }),
                            "" === n ? delete r[i] : (r[i] = n),
                            a({ questionId: t.id, choiceIds: h, textByChoiceId: r })
                        );
                    },
                    maxLength: e.textMaxLength?.value,
                    showCharacterCount: null != e.textMaxLength,
                    error: n2(o, s, { choiceId: e.id }),
                    dir: "auto",
                }),
            },
            `${e.id}-text`,
        );
    }
    let p =
        "multi" === u
            ? null
            : i.choices
                  .filter((e) => {
                      let { id: n, allowText: t } = e;
                      return t && h.includes(n);
                  })
                  .map(g);
    if ("single" === u)
        n = (0, l.jsx)("div", {
            className: n0.R$,
            children: (0, l.jsx)(nA.z, {
                "aria-labelledby": c,
                options: i.choices.map((e) => ({ name: e.text, value: e.id })),
                value: h[0] ?? null,
                onChange: (e) => f([e]),
            }),
        });
    else if ("dropdown" === u)
        n = (0, l.jsx)(nC.l, {
            label: t.text,
            hideLabel: !0,
            selectionMode: "single",
            placeholder: nZ.intl.string(nz.default["1vr4Lp"]),
            options: i.choices.map((e) => ({ id: String(e.id), label: e.text, value: e.id })),
            value: h[0] ?? null,
            onSelectionChange: (e) => f(null != e ? [e] : []),
        });
    else {
        let e = h.filter((e) => i.choices.find((n) => n.id === e)?.exclusive !== !0).length,
            t = null != i.maxSelected && e >= i.maxSelected.value;
        n = (0, l.jsx)("div", {
            className: n0.ab,
            children: i.choices.map((e) => {
                let n = h.includes(e.id);
                return (0, l.jsxs)(
                    d.Fragment,
                    {
                        children: [
                            (0, l.jsx)(nM.S, {
                                label: e.text,
                                checked: n,
                                disabled: !n && t && !e.exclusive,
                                onChange: (n) =>
                                    f(
                                        (function (e, n, t, i) {
                                            if (!i) return n.filter((e) => e !== t.id);
                                            if (t.exclusive) return [t.id];
                                            let r = new Set(
                                                e.choices
                                                    .filter((e) => {
                                                        let { exclusive: n } = e;
                                                        return n;
                                                    })
                                                    .map((e) => {
                                                        let { id: n } = e;
                                                        return n;
                                                    }),
                                            );
                                            return [...n.filter((e) => !r.has(e)), t.id];
                                        })(i, h, e, n),
                                    ),
                            }),
                            e.allowText && n && g(e),
                        ],
                    },
                    e.id,
                );
            }),
        });
    }
    return (0, l.jsxs)(n1, {
        ...e,
        hint:
            "multi" === u
                ? (function (e) {
                      let { minSelected: n, maxSelected: t } = e,
                          i = n?.value,
                          r = t?.value;
                      return null != i && null != r
                          ? i === r
                              ? nZ.intl.formatToPlainString(nz.default["i+lSRa"], { count: i })
                              : nZ.intl.formatToPlainString(nz.default.C2Yx8b, { min: i, max: r })
                          : null != i
                            ? nZ.intl.formatToPlainString(nz.default["i+lSRa"], { count: i })
                            : null != r
                              ? nZ.intl.formatToPlainString(nz.default.CYgHSQ, { count: r })
                              : null;
                  })(i)
                : null,
        children: [n, p],
    });
}
function n4(e) {
    let { feature: n, level: t } = e;
    return null == t
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  "" !== t.imageUrl && (0, l.jsx)("img", { className: n0.SV, src: t.imageUrl, alt: t.imageAltText }),
                  (0, l.jsx)("span", {
                      dir: "auto",
                      children:
                          null != t.price && "" !== n.priceCurrency
                              ? nZ.intl.data.formatNumber(t.price.value, {
                                    style: "currency",
                                    currency: n.priceCurrency,
                                })
                              : t.text,
                  }),
              ],
          });
}
function n5(e) {
    let { pageId: n, conjoint: t, answer: i, onChange: r } = e,
        { features: a, tasks: o, includeNoneOption: s } = t,
        [c, u] = d.useState(() => o.map(() => null)),
        h =
            null != i
                ? o.map((e, n) => i.chosenConceptIndexes[n] ?? null)
                : c.every((e) => null != e)
                  ? o.map(() => null)
                  : c;
    function m(e, t) {
        let i = o.map((n, i) => (i === e ? t : (h[i] ?? null)));
        u(i);
        let a = i.filter((e) => null != e);
        r(a.length === o.length ? { pageId: n, chosenConceptIndexes: a } : null);
    }
    return (0, l.jsxs)("div", {
        className: n0.Cz,
        children: [
            "" !== t.text &&
                (0, l.jsx)(nS.E, {
                    variant: "body-md/semibold",
                    color: "text-strong",
                    children: (0, l.jsx)("span", { dir: "auto", children: t.text }),
                }),
            (0, l.jsx)("div", {
                className: n0.vB,
                children: o.map((e, t) => {
                    let { concepts: i } = e,
                        r = `native-survey-conjoint-${n}-${t}`,
                        d = `${r}-heading`;
                    return (0, l.jsxs)(
                        "div",
                        {
                            className: n0._W,
                            role: "radiogroup",
                            "aria-labelledby": d,
                            children: [
                                (0, l.jsx)(nS.E, {
                                    id: d,
                                    variant: "body-sm/semibold",
                                    color: "text-muted",
                                    children: nZ.intl.formatToPlainString(nz.default["2Nmx89"], {
                                        current: t + 1,
                                        total: o.length,
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    className: n0.W,
                                    children: i.map((e, n) => {
                                        var i;
                                        return (0, l.jsxs)(
                                            "div",
                                            {
                                                className: n0.N7,
                                                children: [
                                                    ((i = e.label),
                                                    (0, l.jsx)("input", {
                                                        id: `${r}-${n}`,
                                                        className: n0.UU,
                                                        type: "radio",
                                                        name: r,
                                                        checked: h[t] === n,
                                                        "aria-label": nZ.intl.formatToPlainString(nz.default.mRwiYF, {
                                                            label: i,
                                                        }),
                                                        onChange: () => m(t, n),
                                                    })),
                                                    (0, l.jsxs)("label", {
                                                        htmlFor: `${r}-${n}`,
                                                        className: n0.RM,
                                                        children: [
                                                            (0, l.jsx)(nS.E, {
                                                                variant: "body-md/semibold",
                                                                color: "text-strong",
                                                                children: (0, l.jsx)("span", {
                                                                    dir: "auto",
                                                                    children: e.label,
                                                                }),
                                                            }),
                                                            a.map((n, t) =>
                                                                (0, l.jsxs)(
                                                                    "div",
                                                                    {
                                                                        children: [
                                                                            (0, l.jsx)(nS.E, {
                                                                                variant: "body-xs/normal",
                                                                                color: "text-muted",
                                                                                children: (0, l.jsx)("span", {
                                                                                    dir: "auto",
                                                                                    children: n.label,
                                                                                }),
                                                                            }),
                                                                            (0, l.jsx)(n4, {
                                                                                feature: n,
                                                                                level: e.levels[t],
                                                                            }),
                                                                        ],
                                                                    },
                                                                    n.id,
                                                                ),
                                                            ),
                                                        ],
                                                    }),
                                                ],
                                            },
                                            n,
                                        );
                                    }),
                                }),
                                s &&
                                    (0, l.jsxs)("div", {
                                        className: `${n0.Io} ${n0.gI}`,
                                        children: [
                                            (0, l.jsx)("input", {
                                                id: `${r}-none`,
                                                className: n0.UU,
                                                type: "radio",
                                                name: r,
                                                checked: -1 === h[t],
                                                onChange: () => m(t, -1),
                                            }),
                                            (0, l.jsx)("label", {
                                                htmlFor: `${r}-none`,
                                                className: n0.W8,
                                                children: (0, l.jsx)(nS.E, {
                                                    variant: "body-md/medium",
                                                    color: "currentColor",
                                                    children: nZ.intl.string(nz.default.WwU3lH),
                                                }),
                                            }),
                                        ],
                                    }),
                            ],
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
var n8 = t(503698),
    n9 = t.n(n8);
function n6(e) {
    let { name: n, label: t, checked: i, onChange: r } = e;
    return (0, l.jsxs)("label", {
        className: n0.wK,
        children: [
            (0, l.jsx)("input", { className: n0.aF, type: "radio", name: n, checked: i, onChange: r }),
            (0, l.jsx)(nA.T, { checked: i, disabled: !1 }),
            (0, l.jsx)(nX.A, { children: t }),
        ],
    });
}
function n7(e) {
    let { question: n, body: t, answer: i, onChange: r, errors: a, page: o } = e,
        s = i?.rows ?? [];
    return (0, l.jsx)(n1, {
        ...e,
        children: (0, l.jsx)("div", {
            className: n0.wY,
            children: (0, l.jsxs)("table", {
                className: n0.tp,
                children: [
                    (0, l.jsx)("thead", {
                        children: (0, l.jsxs)("tr", {
                            children: [
                                (0, l.jsx)("td", {}),
                                t.scale.map((e) =>
                                    (0, l.jsx)("th", { scope: "col", dir: "auto", children: e.text }, e.id),
                                ),
                            ],
                        }),
                    }),
                    (0, l.jsx)("tbody", {
                        children: t.rows.map((e) => {
                            let i = n2(a, o, { rowId: e.id }),
                                d = `native-survey-matrix-${n.id}-row-${e.id}`,
                                c = `${d}-error`,
                                u = s.find((n) => {
                                    let { rowId: t } = n;
                                    return t === e.id;
                                })?.choiceId;
                            return (0, l.jsxs)(
                                "tr",
                                {
                                    className: n9()({ [n0.Xu]: null != i }),
                                    role: "radiogroup",
                                    "aria-labelledby": d,
                                    "aria-describedby": null != i ? c : void 0,
                                    children: [
                                        (0, l.jsxs)("th", {
                                            scope: "row",
                                            id: d,
                                            children: [
                                                (0, l.jsx)("span", { dir: "auto", children: e.text }),
                                                null != i &&
                                                    (0, l.jsx)(nS.E, {
                                                        id: c,
                                                        variant: "body-xs/medium",
                                                        color: "text-feedback-critical",
                                                        children: i,
                                                    }),
                                            ],
                                        }),
                                        t.scale.map((i) =>
                                            (0, l.jsx)(
                                                "td",
                                                {
                                                    children: (0, l.jsx)(n6, {
                                                        name: d,
                                                        checked: u === i.id,
                                                        label: nZ.intl.formatToPlainString(nz.default.fwbD3G, {
                                                            row: e.text,
                                                            column: i.text,
                                                        }),
                                                        onChange: () => {
                                                            var a, o;
                                                            let l, d;
                                                            return (
                                                                (a = e.id),
                                                                (o = i.id),
                                                                (l = s.filter((e) => e.rowId !== a)),
                                                                (d = t.rows
                                                                    .map((e) => {
                                                                        let { id: n } = e;
                                                                        return n === a
                                                                            ? { rowId: a, choiceId: o }
                                                                            : l.find((e) => e.rowId === n);
                                                                    })
                                                                    .filter((e) => null != e)),
                                                                r({ questionId: n.id, rows: d })
                                                            );
                                                        },
                                                    }),
                                                },
                                                i.id,
                                            ),
                                        ),
                                    ],
                                },
                                e.id,
                            );
                        }),
                    }),
                ],
            }),
        }),
    });
}
let te = { mostItemId: 0, leastItemId: 0 };
function tn(e) {
    let { pageId: n, maxdiff: t, answer: i, onChange: r } = e,
        { sets: a, mostLabel: o, leastLabel: s, anchorQuestionText: d } = t,
        c = a.map((e, n) => i?.picksPerSet[n] ?? te),
        u = i?.anchor ?? eD.UNSPECIFIED,
        h = `native-survey-maxdiff-${n}-anchor`;
    return (0, l.jsxs)("div", {
        className: n0.Cz,
        children: [
            "" !== t.text &&
                (0, l.jsx)(nS.E, {
                    variant: "body-md/semibold",
                    color: "text-strong",
                    children: (0, l.jsx)("span", { dir: "auto", children: t.text }),
                }),
            (0, l.jsxs)("div", {
                className: n0.vB,
                children: [
                    a.map((e, t) => {
                        let { items: i } = e,
                            d = c[t],
                            h = `native-survey-maxdiff-${n}-${t}`;
                        function m(e, i) {
                            return r({
                                pageId: n,
                                anchor: u,
                                picksPerSet: c.map((n, r) =>
                                    r === t
                                        ? "most" === e
                                            ? { mostItemId: i, leastItemId: d.leastItemId === i ? 0 : d.leastItemId }
                                            : { leastItemId: i, mostItemId: d.mostItemId === i ? 0 : d.mostItemId }
                                        : n,
                                ),
                            });
                        }
                        let f = nZ.intl.formatToPlainString(nz.default.NcfvIH, { current: t + 1, total: a.length });
                        return (0, l.jsxs)(
                            "section",
                            {
                                className: n0._W,
                                "aria-labelledby": `${h}-heading`,
                                children: [
                                    a.length > 1
                                        ? (0, l.jsx)(nS.E, {
                                              id: `${h}-heading`,
                                              variant: "body-sm/semibold",
                                              color: "text-muted",
                                              children: f,
                                          })
                                        : (0, l.jsx)(nX.A, { id: `${h}-heading`, children: f }),
                                    (0, l.jsx)("div", {
                                        className: n0.wY,
                                        children: (0, l.jsxs)("table", {
                                            className: n0.tp,
                                            children: [
                                                (0, l.jsx)("thead", {
                                                    children: (0, l.jsxs)("tr", {
                                                        children: [
                                                            (0, l.jsx)("th", {
                                                                scope: "col",
                                                                dir: "auto",
                                                                children: o,
                                                            }),
                                                            (0, l.jsx)("td", {}),
                                                            (0, l.jsx)("th", {
                                                                scope: "col",
                                                                dir: "auto",
                                                                children: s,
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                (0, l.jsx)("tbody", {
                                                    children: i.map((e) =>
                                                        (0, l.jsxs)(
                                                            "tr",
                                                            {
                                                                children: [
                                                                    (0, l.jsx)("td", {
                                                                        children: (0, l.jsx)(n6, {
                                                                            name: `${h}-most`,
                                                                            checked: d.mostItemId === e.id,
                                                                            label: nZ.intl.formatToPlainString(
                                                                                nz.default.udbN7p,
                                                                                { side: o, item: e.text },
                                                                            ),
                                                                            onChange: () => m("most", e.id),
                                                                        }),
                                                                    }),
                                                                    (0, l.jsx)("th", {
                                                                        scope: "row",
                                                                        dir: "auto",
                                                                        children: e.text,
                                                                    }),
                                                                    (0, l.jsx)("td", {
                                                                        children: (0, l.jsx)(n6, {
                                                                            name: `${h}-least`,
                                                                            checked: d.leastItemId === e.id,
                                                                            label: nZ.intl.formatToPlainString(
                                                                                nz.default.udbN7p,
                                                                                { side: s, item: e.text },
                                                                            ),
                                                                            onChange: () => m("least", e.id),
                                                                        }),
                                                                    }),
                                                                ],
                                                            },
                                                            e.id,
                                                        ),
                                                    ),
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                    "" !== d &&
                        (0, l.jsxs)("section", {
                            className: n0._W,
                            children: [
                                (0, l.jsx)(nS.E, {
                                    id: h,
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    children: (0, l.jsx)("span", { dir: "auto", children: d }),
                                }),
                                (0, l.jsx)("div", {
                                    className: n0.R$,
                                    children: (0, l.jsx)(nA.z, {
                                        "aria-labelledby": h,
                                        value: u === eD.UNSPECIFIED ? null : u,
                                        options: [
                                            { name: nZ.intl.string(nz.default["3XYsdu"]), value: eD.ALL },
                                            { name: nZ.intl.string(nz.default.LRkHAo), value: eD.SOME },
                                            { name: nZ.intl.string(nz.default.EcbOOg), value: eD.NONE },
                                        ],
                                        onChange: (e) => r({ pageId: n, picksPerSet: c, anchor: e }),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var tt = t(126600),
    ti = t(840508),
    tr = t(866665),
    ta = t(408278),
    to = t(772838),
    ts = t(872351),
    tl = t(708988),
    td = t(789645);
function tc(e, n, t) {
    let i = e.filter((e) => e !== n.choiceId),
        r = null == t ? i.length : Math.min(t, i.length);
    return [...i.slice(0, r), n.choiceId, ...i.slice(r)];
}
function tu(e) {
    let { icon: n, label: t, disabled: i, onClick: r } = e;
    return (0, l.jsx)(tr.m, {
        text: t,
        children: (0, l.jsx)(ta.K, {
            size: "sm",
            variant: "secondary",
            icon: n,
            "aria-label": t,
            disabled: i,
            onClick: r,
        }),
    });
}
function th(e) {
    let { drag: n, text: t, hintId: i } = e;
    return (0, l.jsx)("div", {
        ref: (e) => {
            n(e);
        },
        className: n0.b3,
        tabIndex: 0,
        role: "button",
        "aria-roledescription": nZ.intl.string(nz.default.jruV65),
        "aria-label": nZ.intl.formatToPlainString(nz.default["ZEO+L0"], { choice: t }),
        "aria-describedby": i,
        children: (0, l.jsx)(to.DragIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
    });
}
function tm(e) {
    let { dragType: n, choice: t, index: i, count: r, full: a, hintId: o, onDrop: s, onMove: d, onRemove: c } = e,
        [{ isDragging: u }, h, m] = (0, tt.i)({
            type: n,
            item: () => ({ choiceId: t.id, rankedIndex: i }),
            collect: (e) => ({ isDragging: e.isDragging() }),
        }),
        [{ dropSide: f }, g] = (0, ti.H)({
            accept: n,
            canDrop: (e) => null != e.rankedIndex || !a,
            drop: (e) => s(e, i),
            collect: (e) => {
                let n = e.getItem();
                return null != n && e.isOver({ shallow: !0 }) && e.canDrop() && n.choiceId !== t.id
                    ? { dropSide: null != n.rankedIndex && n.rankedIndex < i ? "after" : "before" }
                    : { dropSide: null };
            },
        });
    return (0, l.jsxs)("li", {
        ref: (e) => {
            (g(e), m(e));
        },
        className: n9()(n0.IL, { [n0.ho]: u, [n0.ne]: "before" === f, [n0.O3]: "after" === f }),
        children: [
            (0, l.jsx)(th, { drag: h, text: t.text, hintId: o }),
            (0, l.jsx)(nS.E, {
                variant: "body-md/semibold",
                color: "text-strong",
                className: n0.mW,
                "aria-hidden": !0,
                children: i + 1,
            }),
            (0, l.jsx)("span", { className: n0.n4, dir: "auto", children: t.text }),
            (0, l.jsx)(tu, {
                icon: ts.ArrowSmallUpIcon,
                label: nZ.intl.formatToPlainString(nz.default.hTrL89, { choice: t.text }),
                disabled: 0 === i,
                onClick: () => d(i - 1),
            }),
            (0, l.jsx)(tu, {
                icon: tl.ArrowSmallDownIcon,
                label: nZ.intl.formatToPlainString(nz.default.y6C60S, { choice: t.text }),
                disabled: i === r - 1,
                onClick: () => d(i + 1),
            }),
            (0, l.jsx)(tu, {
                icon: td.XSmallIcon,
                label: nZ.intl.formatToPlainString(nz.default["69lK34"], { choice: t.text }),
                onClick: c,
            }),
        ],
    });
}
function tf(e) {
    let { dragType: n, choice: t, full: i, hintId: r, onAdd: a } = e,
        [{ isDragging: o }, s, d] = (0, tt.i)({
            type: n,
            item: () => ({ choiceId: t.id, rankedIndex: null }),
            collect: (e) => ({ isDragging: e.isDragging() }),
        });
    return (0, l.jsxs)("li", {
        ref: (e) => {
            d(e);
        },
        className: n9()(n0.IL, { [n0.ho]: o }),
        children: [
            (0, l.jsx)(th, { drag: s, text: t.text, hintId: r }),
            (0, l.jsx)("span", { className: n0.n4, dir: "auto", children: t.text }),
            (0, l.jsx)(nE.$, {
                size: "sm",
                variant: "primary",
                text: nZ.intl.string(nz.default.ShDjDb),
                "aria-label": nZ.intl.formatToPlainString(nz.default.mDRZoH, { choice: t.text }),
                disabled: i,
                onClick: a,
            }),
        ],
    });
}
function tg(e) {
    let { question: n, body: t, answer: i, onChange: r } = e,
        a = i?.rankedChoiceIds ?? [],
        o = t.rankTop?.value ?? t.choices.length,
        s = a.length >= o,
        d = new Map(t.choices.map((e) => [e.id, e])),
        c = t.choices.filter((e) => {
            let { id: n } = e;
            return !a.includes(n);
        }),
        u = `native-survey-rank-${n.id}`,
        h = `native-survey-rank-${n.id}-drag-hint`;
    function m(e) {
        return r(e.length > 0 ? { questionId: n.id, rankedChoiceIds: e } : null);
    }
    let [f, g] = (0, ti.H)({
            accept: u,
            canDrop: (e) => null != e.rankedIndex || !s,
            drop: (e, n) => {
                n.didDrop() || m(tc(a, e, null));
            },
            collect: (e) => {
                let n = e.getItem(),
                    t = null != n && null == n.rankedIndex;
                return { active: t && !s, refused: t && s && e.isOver() };
            },
        }),
        [p, k] = (0, ti.H)({
            accept: u,
            canDrop: (e) => null != e.rankedIndex,
            drop: (e) => m(a.filter((n) => n !== e.choiceId)),
            collect: (e) => ({ active: e.getItem()?.rankedIndex != null }),
        }),
        y =
            null != t.rankTop
                ? nZ.intl.formatToPlainString(nz.default.h9Bg0P, { count: o })
                : nZ.intl.string(nz.default["PmTEw/"]);
    return (0, l.jsxs)(n1, {
        ...e,
        hint: y,
        children: [
            (0, l.jsx)(nX.A, { id: h, children: nZ.intl.string(nz.default.hARiEJ) }),
            (0, l.jsxs)("div", {
                className: n0.Tm,
                children: [
                    (0, l.jsxs)("div", {
                        ref: (e) => {
                            g(e);
                        },
                        className: n9()(n0.QY, n0.KQ, { [n0.yz]: f.active, [n0.eE]: f.refused }),
                        children: [
                            (0, l.jsx)(nS.E, {
                                variant: "body-sm/semibold",
                                color: "text-default",
                                children: nZ.intl.string(nz.default["kS/htE"]),
                            }),
                            0 === a.length
                                ? (0, l.jsx)(nS.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      className: n0.IF,
                                      children: nZ.intl.string(nz.default["4VVMQ4"]),
                                  })
                                : (0, l.jsx)("ol", {
                                      className: n0.HY,
                                      children: a.map((e, n) => {
                                          let t = d.get(e);
                                          return null == t
                                              ? null
                                              : (0, l.jsx)(
                                                    tm,
                                                    {
                                                        dragType: u,
                                                        choice: t,
                                                        index: n,
                                                        count: a.length,
                                                        full: s,
                                                        hintId: h,
                                                        onDrop: (e, n) => m(tc(a, e, n)),
                                                        onMove: (e) =>
                                                            m(
                                                                (function (e, n, t) {
                                                                    let i = [...e],
                                                                        [r] = i.splice(n, 1);
                                                                    return (i.splice(t, 0, r), i);
                                                                })(a, n, e),
                                                            ),
                                                        onRemove: () => m(a.filter((n) => n !== e)),
                                                    },
                                                    e,
                                                );
                                      }),
                                  }),
                            f.refused &&
                                (0, l.jsx)(nS.E, {
                                    variant: "body-sm/medium",
                                    color: "text-feedback-critical",
                                    role: "status",
                                    children: nZ.intl.string(nz.default.ZlHvgh),
                                }),
                        ],
                    }),
                    (c.length > 0 || p.active) &&
                        (0, l.jsxs)("div", {
                            ref: (e) => {
                                k(e);
                            },
                            className: n9()(n0.QY, n0.KQ, { [n0.yz]: p.active }),
                            children: [
                                (0, l.jsx)(nS.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-default",
                                    children: nZ.intl.string(nz.default["+WjZ1W"]),
                                }),
                                0 === c.length
                                    ? (0, l.jsx)(nS.E, {
                                          variant: "body-sm/normal",
                                          color: "text-muted",
                                          className: n0.IF,
                                          children: nZ.intl.string(nz.default.fD9jT0),
                                      })
                                    : null,
                                c.length > 0 &&
                                    (0, l.jsx)("ul", {
                                        className: n0.HY,
                                        children: c.map((e) =>
                                            (0, l.jsx)(
                                                tf,
                                                {
                                                    dragType: u,
                                                    choice: e,
                                                    full: s,
                                                    hintId: h,
                                                    onAdd: () => m([...a, e.id]),
                                                },
                                                e.id,
                                            ),
                                        ),
                                    }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
function tp(e) {
    let { question: n, body: t, answer: i, onChange: r, labelId: a } = e,
        o = [];
    for (let e = t.minValue; e <= t.maxValue; e++) o.push(e);
    let s = `native-survey-scale-${n.id}`,
        d = `${s}-min`,
        c = `${s}-max`;
    return (0, l.jsx)(n1, {
        ...e,
        children: (0, l.jsx)("div", {
            className: n0.UD,
            children: (0, l.jsxs)("div", {
                className: n0.hs,
                children: [
                    (0, l.jsx)("div", {
                        className: n0.up,
                        role: "radiogroup",
                        "aria-labelledby": a,
                        children: o.map((e, a) => {
                            let u =
                                    0 === a && "" !== t.minLabel
                                        ? d
                                        : a === o.length - 1 && "" !== t.maxLabel
                                          ? c
                                          : void 0,
                                h = `${s}-${e}`;
                            return (0, l.jsxs)(
                                "div",
                                {
                                    className: n0.Io,
                                    children: [
                                        (0, l.jsx)("input", {
                                            id: h,
                                            className: n0.UU,
                                            type: "radio",
                                            name: s,
                                            value: e,
                                            checked: i?.value === e,
                                            "aria-describedby": u,
                                            onChange: () => r({ questionId: n.id, value: e }),
                                        }),
                                        (0, l.jsx)("label", {
                                            htmlFor: h,
                                            className: n0.W8,
                                            children: (0, l.jsx)(nS.E, {
                                                variant: "body-md/medium",
                                                color: "currentColor",
                                                children: e,
                                            }),
                                        }),
                                    ],
                                },
                                e,
                            );
                        }),
                    }),
                    ("" !== t.minLabel || "" !== t.maxLabel) &&
                        (0, l.jsxs)("div", {
                            className: n0.YK,
                            children: [
                                (0, l.jsx)(nS.E, {
                                    id: d,
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    children: (0, l.jsx)("span", { dir: "auto", children: t.minLabel }),
                                }),
                                (0, l.jsx)(nS.E, {
                                    id: c,
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    children: (0, l.jsx)("span", { dir: "auto", children: t.maxLabel }),
                                }),
                            ],
                        }),
                ],
            }),
        }),
    });
}
var tk = t(103557);
function ty(e) {
    let { question: n, body: t, answer: i, onChange: r, labelId: a } = e,
        o = i?.text ?? "",
        s = t.maxLength?.value,
        c = d.useRef(null);
    function u(e) {
        return r("" !== e ? { questionId: n.id, text: e } : null);
    }
    return (
        d.useLayoutEffect(() => {
            c.current?.setAttribute("dir", "auto");
        }, [t.multiline]),
        (0, l.jsx)(n1, {
            ...e,
            children: t.multiline
                ? (0, l.jsx)(tk.f, {
                      "aria-labelledby": a,
                      value: o,
                      onChange: u,
                      maxLength: s,
                      showCharacterCount: null != s,
                      autosize: !0,
                      rows: 4,
                      inputRef: c,
                  })
                : (0, l.jsx)(nQ.k, {
                      "aria-labelledby": a,
                      value: o,
                      onChange: u,
                      maxLength: s,
                      showCharacterCount: null != s,
                      dir: "auto",
                  }),
        })
    );
}
function tw(e) {
    let { question: n, answer: t, onChange: i, errors: r, page: a } = e,
        o = { question: n, errors: r, page: a, labelId: `${nY(n.id)}-label`, errorId: `${nY(n.id)}-error` },
        s = t?.kind,
        { kind: d } = n;
    switch (d.oneofKind) {
        case "singleChoice":
        case "dropdown":
        case "multiChoice": {
            let e =
                "singleChoice" === d.oneofKind
                    ? d.singleChoice
                    : "dropdown" === d.oneofKind
                      ? d.dropdown
                      : d.multiChoice;
            return (0, l.jsx)(n3, {
                ...o,
                variant: "singleChoice" === d.oneofKind ? "single" : "dropdown" === d.oneofKind ? "dropdown" : "multi",
                body: e,
                answer: s?.oneofKind === "choices" ? s.choices : void 0,
                onChange: (e) => i(null != e ? { kind: { oneofKind: "choices", choices: e } } : null),
            });
        }
        case "rank":
            return (0, l.jsx)(tg, {
                ...o,
                body: d.rank,
                answer: s?.oneofKind === "ranked" ? s.ranked : void 0,
                onChange: (e) => i(null != e ? { kind: { oneofKind: "ranked", ranked: e } } : null),
            });
        case "freeText":
            return (0, l.jsx)(ty, {
                ...o,
                body: d.freeText,
                answer: s?.oneofKind === "text" ? s.text : void 0,
                onChange: (e) => i(null != e ? { kind: { oneofKind: "text", text: e } } : null),
            });
        case "scale":
            return (0, l.jsx)(tp, {
                ...o,
                body: d.scale,
                answer: s?.oneofKind === "number" ? s.number : void 0,
                onChange: (e) => i(null != e ? { kind: { oneofKind: "number", number: e } } : null),
            });
        case "matrix":
            return (0, l.jsx)(n7, {
                ...o,
                body: d.matrix,
                answer: s?.oneofKind === "matrix" ? s.matrix : void 0,
                onChange: (e) => i(null != e ? { kind: { oneofKind: "matrix", matrix: e } } : null),
            });
        case "info":
            return (0, l.jsx)(n1, { ...o });
        case void 0:
            return null;
    }
}
function tb(e) {
    let { page: n, request: t, onRequestChange: i, errors: r, onSubmit: a, submitting: o } = e,
        { content: s, pageId: c, progress: u } = n;
    if (
        (d.useEffect(() => {
            if (0 === r.length) return;
            let e = r.find((e) => {
                let { questionId: n } = e;
                return 0 !== n;
            });
            document.getElementById(null != e ? nY(e.questionId) : nH)?.focus();
        }, [r]),
        n.status === eC.COMPLETE || n.status === eC.ENDED)
    )
        return (0, l.jsx)("div", {
            className: n0.MY,
            children: (0, l.jsx)(nS.E, {
                variant: "body-md/normal",
                color: "text-default",
                children: (0, l.jsx)("span", { dir: "auto", children: n.endMessage }),
            }),
        });
    function h(e, n) {
        let r;
        i(((r = t.answers.filter((n) => nF(n) !== e)), { ...t, answers: null != n ? [...r, n] : r }));
    }
    let m = r.find((e) => {
            let { questionId: n } = e;
            return 0 === n;
        }),
        f = nP(t, c)?.kind,
        g = (u?.pageIndex ?? 0) + 1,
        p = Math.max(u?.estimatedPageCount ?? 1, g),
        k = nZ.intl.formatToPlainString(nz.default.onSd4S, { current: g, total: p });
    return (0, l.jsxs)("div", {
        className: n0.MY,
        children: [
            p > 1 &&
                (0, l.jsx)(nV.z, { value: g, minValue: 0, maxValue: p, size: "sm", "aria-label": k, valueLabel: k }),
            r.length > 0 &&
                (0, l.jsx)("div", {
                    id: nH,
                    tabIndex: -1,
                    children: (0, l.jsx)(nG.w, {
                        type: "critical",
                        role: "alert",
                        message:
                            null != m
                                ? "" !== m.message
                                    ? m.message
                                    : nJ(m, n)
                                : nZ.intl.formatToPlainString(nz.default.HwqwCr, { count: r.length }),
                    }),
                }),
            "questions" === s.oneofKind &&
                s.questions.questions.map((e) =>
                    (0, l.jsx)(
                        tw,
                        {
                            question: e,
                            answer: nP(t, e.id),
                            errors: r.filter((n) => {
                                let { questionId: t } = n;
                                return t === e.id;
                            }),
                            page: n,
                            onChange: (n) => h(e.id, n),
                        },
                        e.id,
                    ),
                ),
            "conjoint" === s.oneofKind &&
                (0, l.jsx)(
                    n5,
                    {
                        pageId: c,
                        conjoint: s.conjoint,
                        answer: f?.oneofKind === "conjoint" ? f.conjoint : void 0,
                        onChange: (e) => h(c, null != e ? { kind: { oneofKind: "conjoint", conjoint: e } } : null),
                    },
                    `${c}-${n.revision}`,
                ),
            "maxdiff" === s.oneofKind &&
                (0, l.jsx)(tn, {
                    pageId: c,
                    maxdiff: s.maxdiff,
                    answer: f?.oneofKind === "maxdiff" ? f.maxdiff : void 0,
                    onChange: (e) => h(c, { kind: { oneofKind: "maxdiff", maxdiff: e } }),
                }),
            (0, l.jsx)("div", {
                className: n0.qr,
                children: (0, l.jsx)(nE.$, {
                    variant: "primary",
                    text: nZ.intl.string(
                        !(function (e) {
                            let { progress: n } = e;
                            return null == n || n.pageIndex + 1 >= n.estimatedPageCount;
                        })(n)
                            ? nz.default["LH/X6e"]
                            : nz.default.GyKIes,
                    ),
                    loading: o,
                    onClick: a,
                }),
            }),
        ],
    });
}
function tx(e) {
    return e9.create({
        status: eC.IN_PROGRESS,
        pageId: 10,
        revision: 1,
        progress: { pageIndex: 0, estimatedPageCount: 1 },
        content: { oneofKind: "questions", questions: { questions: [na.create({ id: 11, required: !0, ...e })] } },
    });
}
function tv(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return nd.create({ id: e, text: n, ...t });
}
function tT(e, n) {
    return n_.create({ text: e, imageUrl: n?.url ?? "", imageAltText: n?.alt ?? "" });
}
function t$(e) {
    return n_.create({ text: `$${e}`, price: { value: e } });
}
let tj = [
    {
        id: "single-choice",
        name: "Single choice",
        page: tx({
            text: "Which game do you play most on Discord?",
            kind: {
                oneofKind: "singleChoice",
                singleChoice: {
                    choices: [tv(14, "Minecraft"), tv(12, "Fortnite"), tv(15, "Valorant"), tv(13, "League of Legends")],
                },
            },
        }),
    },
    {
        id: "dropdown",
        name: "Dropdown",
        page: tx({
            text: "Where do you live?",
            kind: {
                oneofKind: "dropdown",
                dropdown: {
                    choices: [
                        tv(21, "Brazil"),
                        tv(22, "Canada"),
                        tv(23, "Germany"),
                        tv(24, "India"),
                        tv(25, "Japan"),
                        tv(26, "United States"),
                    ],
                },
            },
        }),
    },
    {
        id: "multi-choice",
        name: "Multiple choice (1 to 3, with an exclusive choice)",
        page: tx({
            text: "Which of these have you used in the last month?",
            kind: {
                oneofKind: "multiChoice",
                multiChoice: {
                    choices: [
                        tv(33, "Voice channels"),
                        tv(31, "Stage channels"),
                        tv(34, "Screen share"),
                        tv(32, "Activities"),
                        tv(36, "None of these", { exclusive: !0 }),
                    ],
                    minSelected: { value: 1 },
                    maxSelected: { value: 3 },
                },
            },
        }),
    },
    {
        id: "choice-other",
        name: "Multiple choice with \u201COther\u201D text",
        page: tx({
            text: "How did you hear about Discord?",
            kind: {
                oneofKind: "multiChoice",
                multiChoice: {
                    choices: [
                        tv(41, "A friend"),
                        tv(44, "Other", { allowText: !0, textMaxLength: { value: 80 } }),
                        tv(42, "A game"),
                        tv(43, "Social media"),
                    ],
                },
            },
        }),
    },
    {
        id: "rank",
        name: "Rank (top 3 of 5)",
        page: tx({
            text: "Rank the three things you\u2019d most like us to improve.",
            kind: {
                oneofKind: "rank",
                rank: {
                    choices: [
                        { id: 53, text: "Voice quality" },
                        { id: 51, text: "Notifications" },
                        { id: 55, text: "Search" },
                        { id: 52, text: "Server discovery" },
                        { id: 54, text: "Mobile app speed" },
                    ],
                    rankTop: { value: 3 },
                },
            },
        }),
    },
    {
        id: "matrix",
        name: "Matrix",
        page: tx({
            text: "How satisfied are you with each of these?",
            kind: {
                oneofKind: "matrix",
                matrix: {
                    rows: [
                        { id: 61, text: "Text chat" },
                        { id: 62, text: "Voice chat" },
                        { id: 63, text: "Video calls" },
                        { id: 64, text: "Screen share" },
                    ],
                    scale: [
                        { id: 81, text: "Very dissatisfied" },
                        { id: 82, text: "Dissatisfied" },
                        { id: 83, text: "Neutral" },
                        { id: 84, text: "Satisfied" },
                        { id: 85, text: "Very satisfied" },
                    ],
                },
            },
        }),
    },
    {
        id: "scale",
        name: "Scale (1 to 5)",
        page: tx({
            text: "How easy was it to find what you were looking for?",
            kind: {
                oneofKind: "scale",
                scale: { minValue: 1, maxValue: 5, minLabel: "Very hard", maxLabel: "Very easy", nps: !1 },
            },
        }),
    },
    {
        id: "nps",
        name: "NPS (0 to 10)",
        page: tx({
            text: "How likely are you to recommend Discord to a friend?",
            kind: {
                oneofKind: "scale",
                scale: {
                    minValue: 0,
                    maxValue: 10,
                    minLabel: "Not at all likely",
                    maxLabel: "Extremely likely",
                    nps: !0,
                },
            },
        }),
    },
    {
        id: "text-single",
        name: "Text, single line",
        page: tx({
            text: "What do your friends call your squad?",
            kind: { oneofKind: "freeText", freeText: { multiline: !1, maxLength: { value: 300 } } },
        }),
    },
    {
        id: "text-multi",
        name: "Text, multi-line",
        page: tx({
            text: "Anything else you\u2019d like to tell us?",
            kind: { oneofKind: "freeText", freeText: { multiline: !0, maxLength: { value: 300 } } },
        }),
    },
    {
        id: "info",
        name: "Info text",
        page: tx({
            text: "Thanks for helping make Discord better. The next questions are about voice chat.",
            required: !1,
            kind: { oneofKind: "info", info: {} },
        }),
    },
    {
        id: "conjoint",
        name: "Conjoint",
        page: e9.create({
            status: eC.IN_PROGRESS,
            pageId: 10,
            revision: 1,
            progress: { pageIndex: 0, estimatedPageCount: 1 },
            content: {
                oneofKind: "conjoint",
                conjoint: nT.create({
                    text: "Which of these plans would you pick?",
                    features: [
                        { id: 200, label: "Plan", priceCurrency: "" },
                        { id: 210, label: "Perk", priceCurrency: "" },
                        { id: 220, label: "Monthly price", priceCurrency: "USD" },
                    ],
                    includeNoneOption: !0,
                    tasks: [
                        {
                            concepts: [
                                {
                                    label: "Plan 1",
                                    levels: [
                                        tT("Basic"),
                                        tT("Animated avatar", {
                                            url: "https://cdn.discordapp.com/embed/avatars/0.png",
                                            alt: "A blue Discord avatar",
                                        }),
                                        t$(2.99),
                                    ],
                                },
                                {
                                    label: "Plan 2",
                                    levels: [
                                        tT("Full"),
                                        tT("Custom profile theme", {
                                            url: "https://cdn.discordapp.com/embed/avatars/1.png",
                                            alt: "A grey Discord avatar",
                                        }),
                                        t$(9.99),
                                    ],
                                },
                                { label: "Plan 3", levels: [tT("Basic"), tT("Bigger uploads"), t$(4.99)] },
                            ],
                        },
                    ],
                }),
            },
        }),
    },
    {
        id: "maxdiff",
        name: "MaxDiff",
        page: e9.create({
            status: eC.IN_PROGRESS,
            pageId: 10,
            revision: 1,
            progress: { pageIndex: 0, estimatedPageCount: 1 },
            content: {
                oneofKind: "maxdiff",
                maxdiff: {
                    text: "Which of these matter most and least to you?",
                    mostLabel: "Most important",
                    leastLabel: "Least important",
                    sets: [
                        {
                            items: [
                                { id: 401, text: "Faster app start" },
                                { id: 402, text: "Better noise suppression" },
                                { id: 403, text: "More emoji slots" },
                                { id: 404, text: "Message scheduling" },
                            ],
                        },
                    ],
                    anchorQuestionText: "How many of these would you actually use?",
                },
            },
        }),
    },
];
var tO = t(52479);
let tB = "none";
function tI(e) {
    return JSON.stringify(e, null, 2);
}
function tN(e) {
    let { questionId: n, rowId: t, choiceId: i, code: r } = e,
        a = [0 !== n ? `question ${n}` : "page", 0 !== t ? `row ${t}` : null, 0 !== i ? `choice ${i}` : null]
            .filter((e) => null != e)
            .join(", ");
    return `${eE[r]} on ${a}`;
}
function tR(e) {
    let { fixture: n } = e,
        [t, i] = d.useState(n.page),
        [r, a] = d.useState(() => nK(n.page)),
        [o, s] = d.useState([]),
        [c, u] = d.useState(tB),
        [h, m] = d.useState(null),
        [f, g] = d.useState(0),
        p = (function (e) {
            function n(n, t) {
                return nn.create({ pageId: e.pageId, code: n, message: t });
            }
            return [
                {
                    id: "stale",
                    name: "STALE: the page is out of date",
                    error: n(eE.STALE, "This page is out of date."),
                },
                {
                    id: "too-long",
                    name: "TOO_LONG: the response is over its size limit",
                    error: n(eE.TOO_LONG, "Your answers are too long."),
                },
                {
                    id: "invalid",
                    name: "INVALID: anything else",
                    error: n(eE.INVALID, "Something went wrong with your answers. Please try again."),
                },
            ];
        })(n.page);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: tO.MT,
                children: (0, l.jsx)(
                    tb,
                    {
                        page: t,
                        request: r,
                        onRequestChange: a,
                        errors: o,
                        onSubmit: function () {
                            let e = (function (e, n) {
                                let { pageId: t, content: i } = e,
                                    r = [];
                                function a(e) {
                                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    r.push(nn.create({ pageId: t, code: e, ...n }));
                                }
                                switch (i.oneofKind) {
                                    case "questions":
                                        for (let e of i.questions.questions)
                                            !(function (e, n, t) {
                                                let i = e.id,
                                                    { kind: r } = e;
                                                if ("info" === r.oneofKind || void 0 === r.oneofKind) return;
                                                if (
                                                    (function (e) {
                                                        let n = e?.kind;
                                                        switch (n?.oneofKind) {
                                                            case "choices":
                                                                return 0 === n.choices.choiceIds.length;
                                                            case "ranked":
                                                                return 0 === n.ranked.rankedChoiceIds.length;
                                                            case "text":
                                                                return "" === n.text.text.trim();
                                                            case "number":
                                                                return !1;
                                                            case "matrix":
                                                                return 0 === n.matrix.rows.length;
                                                            case "conjoint":
                                                                return 0 === n.conjoint.chosenConceptIndexes.length;
                                                            case "maxdiff":
                                                                return 0 === n.maxdiff.picksPerSet.length;
                                                            default:
                                                                return !0;
                                                        }
                                                    })(n)
                                                ) {
                                                    e.required && t(eE.REQUIRED, { questionId: i });
                                                    return;
                                                }
                                                let a = n?.kind;
                                                switch (r.oneofKind) {
                                                    case "singleChoice":
                                                    case "dropdown":
                                                    case "multiChoice": {
                                                        if (a?.oneofKind !== "choices") return;
                                                        let e =
                                                                "singleChoice" === r.oneofKind
                                                                    ? r.singleChoice
                                                                    : "dropdown" === r.oneofKind
                                                                      ? r.dropdown
                                                                      : r.multiChoice,
                                                            n = a.choices.choiceIds,
                                                            o = e.choices.some((e) => e.exclusive && n.includes(e.id));
                                                        if ("multiChoice" === r.oneofKind && !o) {
                                                            let { minSelected: r, maxSelected: a } = e;
                                                            (null != r &&
                                                                n.length < r.value &&
                                                                t(eE.TOO_FEW, { questionId: i }),
                                                                null != a &&
                                                                    n.length > a.value &&
                                                                    t(eE.TOO_MANY, { questionId: i }));
                                                        }
                                                        for (let r of e.choices) {
                                                            let e = a.choices.textByChoiceId[r.id];
                                                            r.allowText && n.includes(r.id) && "" === (e ?? "").trim()
                                                                ? t(eE.REQUIRED, { questionId: i, choiceId: r.id })
                                                                : null != e &&
                                                                  null != r.textMaxLength &&
                                                                  nq(e) > r.textMaxLength.value &&
                                                                  t(eE.TOO_LONG, { questionId: i, choiceId: r.id });
                                                        }
                                                        return;
                                                    }
                                                    case "rank": {
                                                        let e = r.rank.rankTop?.value ?? r.rank.choices.length;
                                                        a?.oneofKind === "ranked" &&
                                                            a.ranked.rankedChoiceIds.length < e &&
                                                            t(eE.TOO_FEW, { questionId: i });
                                                        return;
                                                    }
                                                    case "freeText": {
                                                        let { maxLength: e } = r.freeText;
                                                        a?.oneofKind === "text" &&
                                                            null != e &&
                                                            nq(a.text.text) > e.value &&
                                                            t(eE.TOO_LONG, { questionId: i });
                                                        return;
                                                    }
                                                    case "matrix": {
                                                        if (a?.oneofKind !== "matrix" || !e.required) return;
                                                        let n = new Set(
                                                            a.matrix.rows.map((e) => {
                                                                let { rowId: n } = e;
                                                                return n;
                                                            }),
                                                        );
                                                        for (let e of r.matrix.rows)
                                                            n.has(e.id) ||
                                                                t(eE.REQUIRED, { questionId: i, rowId: e.id });
                                                        return;
                                                    }
                                                }
                                            })(e, nP(n, e.id), a);
                                        break;
                                    case "conjoint": {
                                        let e = nP(n, t)?.kind;
                                        (e?.oneofKind === "conjoint" ? e.conjoint.chosenConceptIndexes : []).length !==
                                            i.conjoint.tasks.length && a(eE.REQUIRED);
                                        break;
                                    }
                                    case "maxdiff": {
                                        let e = nP(n, t)?.kind,
                                            r = e?.oneofKind === "maxdiff" ? e.maxdiff : null,
                                            o = r?.picksPerSet ?? [],
                                            s =
                                                "" !== i.maxdiff.anchorQuestionText &&
                                                (r?.anchor ?? eD.UNSPECIFIED) === eD.UNSPECIFIED;
                                        (o.length !== i.maxdiff.sets.length ||
                                            o.some((e) => {
                                                let { mostItemId: n, leastItemId: t } = e;
                                                return 0 === n || 0 === t;
                                            }) ||
                                            s) &&
                                            a(eE.REQUIRED);
                                    }
                                }
                                return r;
                            })(t, r);
                            if ((s(e), e.length > 0)) return void m(null);
                            let n = p.find((e) => {
                                let { id: n } = e;
                                return n === c;
                            });
                            if (null == n) return void m({ kind: "accepted", sent: r });
                            let o = (function (e, n, t) {
                                let { error: i } = t,
                                    r = i.code === eE.STALE;
                                return e9.create({
                                    ...e,
                                    revision: r ? e.revision + 1 : e.revision,
                                    submittedAnswers: r ? [] : n.answers,
                                    errors: [i],
                                });
                            })(t, r, n);
                            (m({ kind: "rejected", sent: r, response: o }), i(o), a(nK(o)), s(o.errors));
                        },
                    },
                    `${t.revision}-${f}`,
                ),
            }),
            (0, l.jsxs)("div", {
                className: tO.fi,
                children: [
                    (0, l.jsx)(nC.l, {
                        label: "Simulate server error",
                        description:
                            "Submit runs the client checks first. If they pass, the server answers with this instead of accepting.",
                        selectionMode: "single",
                        options: [
                            { id: tB, label: "None: the server accepts", value: tB },
                            ...p.map((e) => {
                                let { id: n, name: t } = e;
                                return { id: n, label: t, value: n };
                            }),
                        ],
                        value: c,
                        onSelectionChange: (e) => u(e ?? tB),
                    }),
                    (0, l.jsx)("div", {
                        className: tO.KE,
                        children: (0, l.jsx)(nE.$, {
                            size: "sm",
                            variant: "secondary",
                            text: "Reset page",
                            onClick: function () {
                                (i(n.page), a(nK(n.page)), s([]), m(null), g((e) => e + 1));
                            },
                        }),
                    }),
                    o.length > 0 &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(nS.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-strong",
                                    children:
                                        h?.kind === "rejected"
                                            ? "Errors from the server"
                                            : "Errors from the client checks",
                                }),
                                (0, l.jsx)(nS.E, {
                                    variant: "mono-md/normal",
                                    color: "text-feedback-warning",
                                    className: tO.AV,
                                    children: o.map(tN).join("\n"),
                                }),
                            ],
                        }),
                    null != h &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(nS.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-strong",
                                    children:
                                        "accepted" === h.kind ? "Sent SubmitRequest (accepted)" : "Sent SubmitRequest",
                                }),
                                (0, l.jsx)("pre", {
                                    className: tO.aY,
                                    "aria-label": "Sent SubmitRequest",
                                    children: tI(eF.toJson(h.sent, { useProtoFieldName: !0 })),
                                }),
                            ],
                        }),
                    h?.kind === "rejected" &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(nS.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-strong",
                                    children: "Server response: RenderedPage errors",
                                }),
                                (0, l.jsx)("pre", {
                                    className: tO.aY,
                                    "aria-label": "Server response",
                                    children: tI(e9.toJson(h.response, { useProtoFieldName: !0 }).errors ?? []),
                                }),
                            ],
                        }),
                    (0, l.jsxs)("details", {
                        children: [
                            (0, l.jsx)("summary", {
                                children: (0, l.jsx)(nS.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-strong",
                                    tag: "span",
                                    children: "Rendered page (proto JSON)",
                                }),
                            }),
                            (0, l.jsx)("pre", {
                                className: tO.aY,
                                children: tI(e9.toJson(t, { useProtoFieldName: !0 })),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let t_ = {
    collections: [
        {
            id: "native-surveys",
            name: "Native Surveys",
            groups: [
                {
                    title: "Native surveys",
                    stories: [
                        {
                            name: "Survey page",
                            id: "survey-page",
                            component: function () {
                                let [e, n] = d.useState(tj["0"].id),
                                    t =
                                        tj.find((n) => {
                                            let { id: t } = n;
                                            return t === e;
                                        }) ?? tj["0"];
                                return (0, l.jsxs)("div", {
                                    className: tO.zr,
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: tO.Nz,
                                            children: (0, l.jsx)(nC.l, {
                                                label: "Question type",
                                                selectionMode: "single",
                                                options: tj.map((e) => {
                                                    let { id: n, name: t } = e;
                                                    return { id: n, label: t, value: n };
                                                }),
                                                value: e,
                                                onSelectionChange: (e) => n(e ?? tj["0"].id),
                                            }),
                                        }),
                                        (0, l.jsx)("div", {
                                            className: tO.Zp,
                                            children: (0, l.jsx)(tR, { fixture: t }, t.id),
                                        }),
                                    ],
                                });
                            },
                        },
                    ],
                },
            ],
        },
    ],
};
