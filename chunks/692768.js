var i = t(906018);
function r(e) {
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
t.d(
    n,
    {},
    {
        $s: function (e, n, t) {
            let i = e.answers.filter((e) => r(e) !== n);
            return { ...e, answers: null != t ? [...i, t] : i };
        },
        oC: function (e) {
            let n = e.errors.some((e) => {
                let { code: n } = e;
                return n === i.u2.STALE;
            });
            return i.S3.create({ pageId: e.pageId, revision: e.revision, answers: n ? [] : e.submittedAnswers });
        },
        uO: function (e, n) {
            return e.answers.find((e) => r(e) === n);
        },
    },
);
