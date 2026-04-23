"use strict";
function i(e) {
    if (e?.fields == null) return null;
    let t = {},
        n = {};
    for (let i of e.fields)
        switch (i.rawName) {
            case "poll_question_text":
                t.questionText = i.rawValue;
                break;
            case "victor_answer_id":
                t.victorAnswerId = i.rawValue;
                break;
            case "victor_answer_text":
                t.victorAnswerText = i.rawValue;
                break;
            case "victor_answer_votes":
                t.victorAnswerVotes = parseInt(i.rawValue, 10);
                break;
            case "total_votes":
                t.totalVotes = parseInt(i.rawValue, 10);
                break;
            case "victor_answer_emoji_id":
                n.id = i.rawValue;
                break;
            case "victor_answer_emoji_name":
                n.name = i.rawValue;
                break;
            case "victor_answer_emoji_animated":
                n.animated = "true" === i.rawValue;
        }
    return null != n.name && ((n.animated = n.animated ?? !1), (t.victorEmoji = n)), t;
}
n.d(t, { A: () => i });
