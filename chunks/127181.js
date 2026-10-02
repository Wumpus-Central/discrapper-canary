a.d(t, { B: () => o, MZ: () => l, TH: () => s, tn: () => i });
let n = [
    {
        date: "2026-09-07",
        time: "00:02",
        platforms: ["desktop", "mobile"],
        summary:
            "A Priority toggle arrives in the model picker: on models that offer it, replies come back sooner for more runes, and the Speedrun stop now runs it by default.",
    },
    {
        date: "2026-09-11",
        time: "00:00",
        platforms: ["desktop", "mobile"],
        summary:
            "A new Rust Sphere recipe: a spinning, lit 3D globe drawn by Rust running as WebAssembly, ready to remix into your own renderer.",
    },
    {
        date: "2026-09-28",
        time: "19:34",
        platforms: ["desktop", "mobile"],
        summary:
            "A remix of another project, or one you link to another app, goes straight to building instead of asking you to approve a plan.",
    },
    {
        date: "2026-10-01",
        time: "00:00",
        platforms: ["desktop", "mobile"],
        summary: "Clone is called Remix again: same button, same copy of the app to make your own.",
    },
    {
        date: "2026-09-06",
        time: "00:01",
        platforms: ["desktop"],
        summary:
            "Collaborators on an app shared with their server can now remix it into a copy of their own, with no need for the owner to turn sharing on first.",
    },
    {
        date: "2026-09-15",
        time: "00:00",
        platforms: ["mobile"],
        summary:
            "On phones, a project has the same menu as desktop: remix it, export or import it, get its coding tool link, browse version history and rewind its data from the chat menu, and copy its link or ID, open its settings or delete it from the landing.",
    },
    {
        date: "2026-09-12",
        time: "00:00",
        platforms: ["desktop", "mobile"],
        summary:
            "Plans for an app you imported or remixed no longer invent a wireframe sketch: the sketch is reserved for brand-new apps that have no screens yet.",
    },
    {
        date: "2026-09-03",
        time: "00:01",
        platforms: ["desktop"],
        summary: "Remix an app and Conjure builds your copy first, so the ideas it suggests are ones you can try.",
    },
    {
        date: "2026-09-06",
        time: "00:00",
        platforms: ["desktop", "mobile"],
        summary:
            "Remixed an app? When the original improves, Conjure offers to update your copy while keeping every change you made, only checking with you on the rare spot it cannot keep both. You can also ask it to inherit updates from another app by its project id, even for a project you imported rather than remixed.",
    },
    {
        date: "2026-09-25",
        time: "15:51",
        platforms: ["desktop", "mobile"],
        summary:
            "Remixing an app shows your copy running in a few seconds, before Conjure has even finished looking it over.",
    },
    {
        date: "2026-09-29",
        time: "04:10",
        platforms: ["desktop"],
        summary:
            "Returning to a server takes you back to the app you were building there, if that is where you left off.",
    },
    {
        date: "2026-09-02",
        time: "00:02",
        platforms: ["desktop"],
        summary:
            "A project you import gets fixed up and running straight away, instead of asking you to approve a plan.",
    },
    {
        date: "2026-09-25",
        time: "08:01",
        platforms: ["desktop", "mobile"],
        summary: "A timer beside Conjuring\u2026 counts how long Conjure has been working on your latest request.",
    },
    {
        date: "2026-09-07",
        time: "00:01",
        platforms: ["desktop", "mobile"],
        summary:
            "An app with public pages can now claim a name for its web address \u2014 yourgame.discordvibeapps.com instead of a long number \u2014 and links to the old address keep working.",
    },
    {
        date: "2026-09-14",
        time: "00:00",
        platforms: ["desktop"],
        summary:
            "An app's channel now opens its chat when unread messages are waiting, and new messages preview over the running app while the chat is closed.",
    },
    {
        date: "2026-08-31",
        time: "00:00",
        platforms: ["desktop", "mobile"],
        summary:
            "App icons are drawn to suit what the app actually does, and always come back solid rather than see-through.",
    },
    {
        date: "2026-09-08",
        time: "00:04",
        platforms: ["desktop", "mobile"],
        summary: "App settings that name a channel now offer a channel picker instead of asking you to paste an id.",
    },
    {
        date: "2026-09-02",
        time: "00:03",
        platforms: ["desktop", "mobile"],
        summary:
            "Apps now know who\u2019s using them the moment they open, without asking anyone to sign in or approve anything.",
    },
    {
        date: "2026-09-20",
        time: "00:03",
        platforms: ["desktop", "mobile"],
        summary:
            "Apps that show people now get their real Discord avatars on the first build, and clicking one opens their profile card.",
    },
    {
        date: "2026-09-20",
        time: "00:02",
        platforms: ["desktop", "mobile"],
        summary:
            "Apps you build can now ask the AI quick yes/no, pick-one, and rating questions and get confidence-scored answers.",
    },
    {
        date: "2026-09-23",
        time: "00:03",
        platforms: ["mobile"],
        summary: "Apps you build can now use the phone's tilt and motion sensors, so gyroscope-driven play works.",
    },
    {
        date: "2026-09-29",
        time: "00:11",
        platforms: ["desktop", "mobile"],
        summary: "Apps you build now follow your Discord theme's colors, unless you ask for colors of their own.",
    },
    {
        date: "2026-08-28",
        time: "00:00",
        platforms: ["desktop", "mobile"],
        summary: "Apps you install just for yourself can hold an ordinary back-and-forth conversation with you in DMs.",
    },
    {
        date: "2026-09-24",
        time: "23:16",
        platforms: ["desktop", "mobile"],
        summary:
            "Ask Conjure to undo a change, or open a reply\u2019s menu and pick Restore this version, to put your app back the way it was.",
    },
    {
        date: "2026-09-29",
        time: "16:38",
        platforms: ["mobile"],
        summary:
            "Attachments waiting in the mobile chat box show as thumbnails you can scroll through, like in any Discord chat.",
    },
    {
        date: "2026-09-28",
        time: "01:26",
        platforms: ["desktop", "mobile"],
        summary: "Chat messages keep the time they were sent after you reload the builder.",
    },
    {
        date: "2026-09-01",
        time: "00:00",
        platforms: ["desktop", "mobile"],
        summary:
            "Checklist items Conjure is still working on show a spinner, so running and done tell apart at a glance.",
    },
    {
        date: "2026-09-05",
        time: "00:00",
        platforms: ["desktop", "mobile"],
        summary:
            "Claude Fable 5.1 replaces Claude Fable 5 in the model picker, sharper on long builds at the same price.",
    },
    {
        date: "2026-09-28",
        time: "02:26",
        platforms: ["desktop", "mobile"],
        summary:
            "Claude Opus 5.5 now powers the Big Brain effort stop, and each effort stop runs the same models in every project.",
    },
    {
        date: "2026-09-27",
        time: "09:51",
        platforms: ["desktop", "mobile"],
        summary:
            "Coding tools you connect to an app can now search and script its files, read the Mana docs, set its settings, public pages and icon, use your uploads, and bring in updates from the original, and a broken manifest edit is caught before it deploys.",
    },
    {
        date: "2026-09-28",
        time: "06:02",
        platforms: ["desktop", "mobile"],
        summary: "Commands the agent runs show up to four lines in chat, set in Discord's code font.",
    },
    {
        date: "2026-09-08",
        time: "00:00",
        platforms: ["desktop"],
        summary:
            "Comment mode now picks whatever is under your pointer, not only buttons and headings, and outlines it so you can see what you are about to comment on. Each note is pinned to the exact spot you clicked, and its card opens out of that pin.",
    },
    {
        date: "2026-09-28",
        time: "01:59",
        platforms: ["desktop", "mobile"],
        summary:
            "Conjure can ask questions where you pick several answers at once, and add your own words alongside them.",
    },
    {
        date: "2026-09-27",
        time: "04:34",
        platforms: ["desktop", "mobile"],
        summary: "Conjure can search the web and read pages, so it checks current docs and APIs instead of guessing.",
    },
    {
        date: "2026-09-27",
        time: "17:58",
        platforms: ["desktop", "mobile"],
        summary:
            "Conjure now follows the AGENTS.md notes in your project and the skills you add under .discord/skills, including running their JavaScript helpers.",
    },
    {
        date: "2026-09-25",
        time: "09:50",
        platforms: ["desktop", "mobile"],
        summary:
            "Conjure now tells you when it finishes or needs your answer, even after you step away, and marks those projects in your list, calling out the ones waiting on you.",
    },
    {
        date: "2026-09-26",
        time: "01:40",
        platforms: ["desktop", "mobile"],
        summary:
            "Conjure talks you through what it is doing between steps, and each step says in plain words what it looked at or changed.",
    },
    {
        date: "2026-09-27",
        time: "03:00",
        platforms: ["desktop", "mobile"],
        summary: "Conjure ticks off each checklist step as it finishes it, instead of all at once at the end.",
    },
    {
        date: "2026-09-25",
        time: "05:01",
        platforms: ["desktop", "mobile"],
        summary:
            "Conjure's checklist says what it is doing on each task in progress, several at once when it is, and never leaves one spinning after a turn ends.",
    },
    {
        date: "2026-08-25",
        time: "00:00",
        platforms: ["desktop"],
        summary: "Conjuring has its own doorway in the desktop title bar, so it is one click away from anywhere.",
    },
    {
        date: "2026-09-28",
        time: "06:26",
        platforms: ["desktop", "mobile"],
        summary:
            "Deleting an app also removes the channel it was published in, so it no longer lingers in your server.",
    },
    {
        date: "2026-09-26",
        time: "01:44",
        platforms: ["desktop", "mobile"],
        summary:
            "Deleting an app closes the confirmation right away; the app shows as deleting in your list until it is gone.",
    },
    {
        date: "2026-09-28",
        time: "01:17",
        platforms: ["desktop"],
        summary: "Drop images and files anywhere on the chat to bring them along, not just onto the message box.",
    },
    {
        date: "2026-10-01",
        time: "05:02",
        platforms: ["desktop", "mobile"],
        summary:
            "Each call Conjure makes to a connected tool service names the tool and service again, under its plain-words label.",
    },
    {
        date: "2026-09-30",
        time: "07:31",
        platforms: ["desktop", "mobile"],
        summary:
            "Edit App at the top of your app\u2019s DM opens it in the builder, instead of offering to disconnect it.",
    },
    {
        date: "2026-09-20",
        time: "00:04",
        platforms: ["desktop", "mobile"],
        summary:
            "Effort is now one three-tier dial that acts as a ceiling: pick Speedrun, Balanced, or Big Brain and everything your project runs stays at or under it.",
    },
    {
        date: "2026-09-13",
        time: "00:00",
        platforms: ["desktop"],
        summary:
            "Escape or a click outside the frame now leaves select mode from anywhere, closing whatever was open without picking anything.",
    },
    {
        date: "2026-09-06",
        time: "00:02",
        platforms: ["desktop", "mobile"],
        summary:
            "Every build step now shows its progress behind the curtain \u2014 what is syncing, installing, bundling, packing, checking, and publishing \u2014 instead of one silent line.",
    },
    {
        date: "2026-09-23",
        time: "00:04",
        platforms: ["desktop", "mobile"],
        summary:
            "Files you attach in the chat stay put while you hop to another server, view, or app, until you send or remove them.",
    },
    {
        date: "2026-09-27",
        time: "08:19",
        platforms: ["desktop", "mobile"],
        summary: "Files your connected MCP tools generate can now be saved into your project.",
    },
    {
        date: "2026-09-05",
        time: "00:03",
        platforms: ["desktop", "mobile"],
        summary: "GPT-6 Astra joins the model picker and now powers the Big Brain effort stop.",
    },
    {
        date: "2026-09-29",
        time: "17:55",
        platforms: ["desktop", "mobile"],
        summary: "GPT-6.1 Sol replaces GPT-6 Sol in the model picker and on the Balanced tier of GPT projects.",
    },
    {
        date: "2026-08-26",
        time: "00:00",
        platforms: ["desktop", "mobile"],
        summary: "Hand a project to a whole role in settings, rather than adding one person at a time.",
    },
    {
        date: "2026-09-10",
        time: "00:00",
        platforms: ["desktop", "mobile"],
        summary:
            "Hitting your project limit, or conjuring too fast, now says so instead of just asking you to try again.",
    },
    {
        date: "2026-09-26",
        time: "02:06",
        platforms: ["desktop"],
        summary:
            "Hover a message you sent in the builder chat and open its More menu to copy the text, just like in a channel.",
    },
    {
        date: "2026-09-25",
        time: "20:30",
        platforms: ["desktop", "mobile"],
        summary:
            "If Conjure restarts partway through a long task, it now picks up from its last step and keeps the steps it already showed you.",
    },
    {
        date: "2026-09-27",
        time: "08:08",
        platforms: ["desktop", "mobile"],
        summary:
            "Images you attach before your app is built now reach Conjure, whether you send them while it works, approve a plan, pick an idea, or answer its questions.",
    },
    {
        date: "2026-09-08",
        time: "00:02",
        platforms: ["desktop"],
        summary:
            "Importing a big project is faster and narrates its progress, and a zip that still has node_modules or .git inside now imports cleanly, telling you what was left out.",
    },
    {
        date: "2026-09-29",
        time: "20:41",
        platforms: ["desktop", "mobile"],
        summary:
            "Inspire me is back under a build that just shipped: one click asks Conjure for a few ideas of what to add next.",
    },
    {
        date: "2026-09-26",
        time: "02:14",
        platforms: ["desktop", "mobile"],
        summary:
            "Keys needed cards now have a clear Press here to add securely button, set apart from the key names above it.",
    },
    {
        date: "2026-09-08",
        time: "00:03",
        platforms: ["desktop"],
        summary:
            "Made a mistake in your app\u2019s data? Conjure now saves a restore point before every deploy, lets you save your own, and can rewind the app\u2019s data to any restore point or exact moment from the last 30 days, keeping an undo point so a rewind is never one-way.",
    },
    {
        date: "2026-09-20",
        time: "00:01",
        platforms: ["desktop", "mobile"],
        summary: "Messages sent mid-task route faster: questions, follow-ups, and interrupts respond right away.",
    },
    {
        date: "2026-09-29",
        time: "04:10",
        platforms: ["desktop", "mobile"],
        summary:
            "Messages you send while Conjure is just getting started stay above its reply instead of landing below it.",
    },
    {
        date: "2026-09-21",
        time: "00:01",
        platforms: ["desktop", "mobile"],
        summary: "Moderation Bot now starts with a short wizard, builds straight away, then tells you how to test it.",
    },
    {
        date: "2026-09-25",
        time: "17:34",
        platforms: ["desktop"],
        summary:
            "New server apps can ship into Discord's own app channels, and the Feature Showcase shows one app living in two of them.",
    },
    {
        date: "2026-09-22",
        time: "00:02",
        platforms: ["desktop", "mobile"],
        summary: "On bigger builds, your frame now updates at each milestone so you can watch the app take shape.",
    },
    {
        date: "2026-09-14",
        time: "00:01",
        platforms: ["mobile"],
        summary: "On phones, App Settings is one tap away in the chat menu, without waiting for Conjure to ask.",
    },
    {
        date: "2026-09-18",
        time: "00:00",
        platforms: ["mobile"],
        summary:
            "On phones, Conjure can now drive and look at your app\u2019s Frame while it works; the strip says Controlling and the app holds your taps until it is done.",
    },
    {
        date: "2026-09-17",
        time: "00:01",
        platforms: ["mobile"],
        summary:
            "On phones, Conjure\u2019s replies and reasoning now stream in smoothly, and the status label changes on the loader\u2019s beat, as on desktop.",
    },
    {
        date: "2026-09-18",
        time: "00:07",
        platforms: ["mobile"],
        summary:
            "On phones, Select to edit in the builder\u2019s header lets you tap a part of your app\u2019s Frame, see what you picked, and tell Conjure what should change there.",
    },
    {
        date: "2026-09-25",
        time: "06:20",
        platforms: ["mobile"],
        summary:
            "On phones, a build now opens with Conjure\u2019s name above the live status line, which says what is being made, instead of a separate opening sentence.",
    },
    {
        date: "2026-09-18",
        time: "00:09",
        platforms: ["mobile"],
        summary:
            "On phones, a conjured card on your own profile has a refresh button, so a fresh build shows up without waiting.",
    },
    {
        date: "2026-09-18",
        time: "00:06",
        platforms: ["mobile"],
        summary:
            "On phones, a project\u2019s menu now has Refresh App and Close for the running Frame, Refresh Profile Widget, and a Connect row for each account your app asks to link, as on desktop; the Frame also reloads onto the newest build after every deploy.",
    },
    {
        date: "2026-09-09",
        time: "00:01",
        platforms: ["mobile"],
        summary:
            "On phones, an app channel now has a chat button: read and post in the channel as usual, then tap back to the app.",
    },
    {
        date: "2026-09-18",
        time: "00:13",
        platforms: ["mobile"],
        summary: "On phones, an app\u2019s channel wears the app icon in the channel list, as it does on desktop.",
    },
    {
        date: "2026-09-18",
        time: "00:10",
        platforms: ["mobile"],
        summary:
            "On phones, an app\u2019s sign-in prompt now appears when it asks for one, in its channel and in the builder\u2019s Frame.",
    },
    {
        date: "2026-09-16",
        time: "00:00",
        platforms: ["mobile"],
        summary:
            "On phones, helpers now say what they finished and how long it took, a quick aside is marked as one, and a project that is gone says so instead of closing.",
    },
    {
        date: "2026-09-18",
        time: "00:14",
        platforms: ["mobile"],
        summary: "On phones, hold an app\u2019s channel to find Edit App, which opens it in Conjure.",
    },
    {
        date: "2026-09-17",
        time: "00:03",
        platforms: ["mobile"],
        summary:
            "On phones, install your app or review its new permissions right from the builder; publishing no longer stops at a notice you could only act on from desktop.",
    },
    {
        date: "2026-09-25",
        time: "04:43",
        platforms: ["mobile"],
        summary: "On phones, message times in the builder chat now show the date for anything sent before today.",
    },
    {
        date: "2026-09-18",
        time: "00:12",
        platforms: ["mobile"],
        summary:
            "On phones, new messages in an app\u2019s channel float over the running app for a moment; tap one to open the chat.",
    },
    {
        date: "2026-09-14",
        time: "00:02",
        platforms: ["mobile"],
        summary:
            "On phones, new projects start from a Create button in the header, with recipes, starter prompts, who the app is for, and the Effort scale, and the landing leads with what is new.",
    },
    {
        date: "2026-09-18",
        time: "00:15",
        platforms: ["mobile"],
        summary: "On phones, opening the chat in an app\u2019s channel now marks its messages read.",
    },
    {
        date: "2026-09-28",
        time: "21:49",
        platforms: ["mobile"],
        summary:
            "On phones, opening the keyboard in the builder chat keeps the messages you were reading in view above it.",
    },
    {
        date: "2026-09-18",
        time: "00:04",
        platforms: ["mobile"],
        summary:
            "On phones, rewinding data switches between Preview and Published with the control at the top of the sheet.",
    },
    {
        date: "2026-09-17",
        time: "00:02",
        platforms: ["mobile"],
        summary:
            "On phones, switch between the chat and your app at the top of the builder; the app keeps running while you talk to Conjure, a bot app opens its DM right there, and a profile card shows as it will on your profile.",
    },
    {
        date: "2026-09-16",
        time: "00:04",
        platforms: ["mobile"],
        summary:
            "On phones, tap a name or avatar in the transcript to open their profile, and hold a message to copy its text; handy when building together.",
    },
    {
        date: "2026-09-18",
        time: "00:05",
        platforms: ["mobile"],
        summary:
            "On phones, tapping Publish before your app has a Frame opens a sheet saying what to do next, instead of a bare alert.",
    },
    {
        date: "2026-09-14",
        time: "00:03",
        platforms: ["mobile"],
        summary:
            "On phones, the builder chat now matches desktop: a turn\u2019s work folds behind one line, each helper wears its creature, an interrupted turn says so, and the glow no longer slows the chat down.",
    },
    {
        date: "2026-09-18",
        time: "00:11",
        platforms: ["mobile"],
        summary:
            "On phones, the chat button in an app\u2019s channel shows a dot when there are new messages, and the count when you were mentioned.",
    },
    {
        date: "2026-09-16",
        time: "00:03",
        platforms: ["mobile"],
        summary:
            "On phones, the model picker now sits in the composer until you start typing, and send and stop take turns in that corner as they do in a text channel.",
    },
    {
        date: "2026-09-16",
        time: "00:02",
        platforms: ["mobile"],
        summary:
            "On phones, the strip above the composer now shows what Conjure is doing and the runes used, as on desktop; tap the indicator to read the model\u2019s reasoning as it streams.",
    },
    {
        date: "2026-09-28",
        time: "17:21",
        platforms: ["mobile"],
        summary:
            "On phones, the wand at the start of your profile\u2019s bottom bar opens your projects from every server, as the title bar wand does on desktop.",
    },
    {
        date: "2026-09-18",
        time: "00:03",
        platforms: ["mobile"],
        summary:
            "On phones, while Conjure drives your Frame, the menus and dialogs the app asks Discord to show are answered for it and reported back, as on desktop, so the app never waits on a tap nobody can make.",
    },
    {
        date: "2026-09-18",
        time: "00:08",
        platforms: ["mobile"],
        summary:
            "On phones, your own profile offers Custom card: describe a public source and Conjure builds a profile card from it.",
    },
    {
        date: "2026-09-29",
        time: "22:14",
        platforms: ["desktop", "mobile"],
        summary:
            "Once your app is live, a small tip under Conjure's latest reply says when the live version is out of date, with a link to update it.",
    },
    {
        date: "2026-10-01",
        time: "18:25",
        platforms: ["desktop"],
        summary:
            "Once your server app is live, the builder\u2019s Open button shows its channel\u2019s own icon in place of the #.",
    },
    {
        date: "2026-09-02",
        time: "00:04",
        platforms: ["desktop", "mobile"],
        summary:
            "One Effort scale, from Speedrun to Big Brain, sets how much thinking goes into a run, instead of choosing models and thinking levels separately.",
    },
    {
        date: "2026-09-29",
        time: "16:45",
        platforms: ["mobile"],
        summary:
            "Opening a project on your phone now lands on its newest message instead of stopping partway up the conversation.",
    },
    {
        date: "2026-09-28",
        time: "19:00",
        platforms: ["desktop", "mobile"],
        summary:
            "Paste an image into the chat box and it attaches like an upload. On desktop, pasting anywhere in the builder or into the box for a part of your Frame you picked works too.",
    },
    {
        date: "2026-09-22",
        time: "00:04",
        platforms: ["desktop", "mobile"],
        summary:
            "Paste your server rules into Moderation Bot and AI checks every message against them; your team can edit them any time in the app.",
    },
    {
        date: "2026-09-01",
        time: "00:01",
        platforms: ["desktop", "mobile"],
        summary: "People you share a project with can see the Publish control, instead of it being owner-only.",
    },
    {
        date: "2026-09-09",
        time: "00:02",
        platforms: ["desktop", "mobile"],
        summary:
            "Pick which app a voice channel runs from the call itself, and switch between it and the participants.",
    },
    {
        date: "2026-09-24",
        time: "23:06",
        platforms: ["desktop", "mobile"],
        summary:
            "Picking a recipe shows it running in a few seconds, instead of after Conjure has rebuilt it from scratch.",
    },
    {
        date: "2026-09-26",
        time: "02:20",
        platforms: ["desktop", "mobile"],
        summary:
            "Plan cards have an Approve button that starts the build. To change the plan, type what you want different.",
    },
    {
        date: "2026-09-30",
        time: "05:23",
        platforms: ["desktop", "mobile"],
        summary:
            "Plan cards keep their Conjure it! button while you ask Conjure follow-up questions, until a newer plan takes its place.",
    },
    {
        date: "2026-09-28",
        time: "20:30",
        platforms: ["desktop", "mobile"],
        summary:
            "Plan cards now say Conjure it! on the button, with a reminder beside it that you can tell Conjure what to change.",
    },
    {
        date: "2026-10-01",
        time: "18:28",
        platforms: ["desktop", "mobile"],
        summary:
            "Plan feedback gets you a fresh plan card that says what changed, and the older plan folds up so you can still open it.",
    },
    {
        date: "2026-08-31",
        time: "00:03",
        platforms: ["desktop", "mobile"],
        summary: "Plan proposals come with a wireframe sketch, so you can see the shape of the app before you say go.",
    },
    {
        date: "2026-09-27",
        time: "21:37",
        platforms: ["desktop", "mobile"],
        summary:
            "Preview checks finish as soon as your Activity loads instead of waiting a few seconds, and Conjure now fixes a crash in your app the first time it happens.",
    },
    {
        date: "2026-09-23",
        time: "00:00",
        platforms: ["desktop", "mobile"],
        summary:
            "Project, app, secrets, and model settings now live together in one Settings dialog, one tab each; the gear beside the chat is gone.",
    },
    {
        date: "2026-09-30",
        time: "00:13",
        platforms: ["desktop", "mobile"],
        summary:
            "Publish now tells you which server permissions you're missing when you can't publish an app into its server.",
    },
    {
        date: "2026-09-01",
        time: "00:02",
        platforms: ["desktop", "mobile"],
        summary:
            "Publishing now offers patch notes: Conjure drafts what changed since your last release, you edit them, and they post to a channel you pick.",
    },
    {
        date: "2026-09-24",
        time: "00:00",
        platforms: ["desktop", "mobile"],
        summary: "Remix is now called Clone: same button, same copy of the app to make your own.",
    },
    {
        date: "2026-09-27",
        time: "21:38",
        platforms: ["desktop", "mobile"],
        summary:
            "Reopening an app shows what Conjure is recalling while your conversation loads, and a brand new app greets you straight away.",
    },
    {
        date: "2026-09-29",
        time: "20:30",
        platforms: ["desktop"],
        summary: "Restore this version is in the More menu when you hover a Conjure reply, as well as on right-click.",
    },
    {
        date: "2026-09-25",
        time: "23:27",
        platforms: ["desktop"],
        summary:
            "Shared projects show the faces of the people who made and work on them beside the name; hover them to see who they are.",
    },
    {
        date: "2026-09-02",
        time: "00:01",
        platforms: ["desktop", "mobile"],
        summary:
            "Small follow-ups like adding sign-in are built straight away, instead of coming back as another plan to approve.",
    },
    {
        date: "2026-09-24",
        time: "00:01",
        platforms: ["desktop", "mobile"],
        summary:
            "Starting Moderation Bot from a server it can be built in now skips the pick-a-server step; the bot is made for the server you are in.",
    },
    {
        date: "2026-09-28",
        time: "02:09",
        platforms: ["desktop", "mobile"],
        summary:
            "Starting from a recipe shows its progress as one Putting it in the preview step, the same as every other change.",
    },
    {
        date: "2026-09-26",
        time: "02:20",
        platforms: ["desktop", "mobile"],
        summary: "Task lists show a visible empty box beside every step still to come, instead of a blank gap.",
    },
    {
        date: "2026-09-23",
        time: "00:05",
        platforms: ["desktop", "mobile"],
        summary:
            "Task lists stop spinning once Conjure finishes or you press Stop, and an earlier list folds away with its unfinished tasks marked when a new one starts.",
    },
    {
        date: "2026-09-30",
        time: "11:30",
        platforms: ["desktop", "mobile"],
        summary: "Templates are now called recipes.",
    },
    {
        date: "2026-09-29",
        time: "20:21",
        platforms: ["desktop", "mobile"],
        summary:
            "The Conjuring MCP panel now gives you a one-time link, good for 10 minutes, to hand your coding agent. It signs you in with Discord instead of asking you to paste a header, and stays connected for up to 30 days.",
    },
    {
        date: "2026-09-28",
        time: "19:37",
        platforms: ["desktop", "mobile"],
        summary:
            "The Conjuring MCP panel now gives you an Authorization header to add alongside the link, so the link itself no longer carries your key.",
    },
    {
        date: "2026-10-01",
        time: "01:21",
        platforms: ["desktop", "mobile"],
        summary:
            "The agent can batch several workspace and MCP tool calls into one short script, so multi-step checks and lookups finish in a single step.",
    },
    {
        date: "2026-09-09",
        time: "00:00",
        platforms: ["desktop"],
        summary:
            "The app frame can go fullscreen: a new header control fills your whole screen with the running app, and Escape brings the view back.",
    },
    {
        date: "2026-09-14",
        time: "00:04",
        platforms: ["mobile"],
        summary:
            "The box for answering a question in your own words no longer grabs the keyboard the moment a question appears, and it reads as an answer rather than a heading.",
    },
    {
        date: "2026-09-23",
        time: "00:02",
        platforms: ["mobile"],
        summary: "The builder chat now glides smoothly with the keyboard as it opens and closes.",
    },
    {
        date: "2026-09-28",
        time: "03:35",
        platforms: ["desktop", "mobile"],
        summary:
            "The chat no longer adds a \u201CTested the app\u201D line; the blue bar on your Frame shows when Conjure is testing.",
    },
    {
        date: "2026-09-08",
        time: "00:01",
        platforms: ["desktop", "mobile"],
        summary:
            "The checklist step being worked on gets its box back: the spinner turns inside the same frame the finished tick fills in.",
    },
    {
        date: "2026-09-22",
        time: "00:00",
        platforms: ["desktop"],
        summary: "The create screen greets you with a little more magic.",
    },
    {
        date: "2026-09-29",
        time: "20:59",
        platforms: ["desktop", "mobile"],
        summary: "The create screen shows how many app slots you have left.",
    },
    {
        date: "2026-09-28",
        time: "17:34",
        platforms: ["desktop", "mobile"],
        summary:
            "The cursor Conjure moves while testing your app is now about the size of your own, still blue and easy to spot.",
    },
    {
        date: "2026-09-17",
        time: "00:00",
        platforms: ["mobile"],
        summary: "The debug Trace tab on phones can save the redacted trace as a JSON file, as desktop exports it.",
    },
    {
        date: "2026-09-22",
        time: "00:03",
        platforms: ["desktop", "mobile"],
        summary:
            "The model lineup moved up: Claude Opus 5.5 replaces Opus 5 on the Balanced tier of Claude projects, and GPT-6 Sol and GPT-6 Luna replace the GPT-5.6 family in the picker, taking the Balanced and Speedrun tiers on GPT projects.",
    },
    {
        date: "2026-09-21",
        time: "00:00",
        platforms: ["desktop", "mobile"],
        summary: "The model picker now offers Grok 4.7 alongside Claude and GPT.",
    },
    {
        date: "2026-09-26",
        time: "01:47",
        platforms: ["desktop", "mobile"],
        summary: "The project menu now calls its MCP item just MCP, matching the items beside it.",
    },
    {
        date: "2026-09-29",
        time: "03:18",
        platforms: ["desktop", "mobile"],
        summary: "The publish card is now just a button, with the server's icon and name beside it.",
    },
    {
        date: "2026-09-22",
        time: "00:01",
        platforms: ["desktop"],
        summary: "The recipe and starter cards light up under your cursor.",
    },
    {
        date: "2026-09-05",
        time: "00:02",
        platforms: ["desktop", "mobile"],
        summary:
            "The rune panel is simpler now: one Conjuring count covers all the work in a turn, with Compacting listed separately.",
    },
    {
        date: "2026-09-20",
        time: "00:00",
        platforms: ["desktop", "mobile"],
        summary: "The rune usage panel now shows Deciding, the quick checks that keep an eye on your builds.",
    },
    {
        date: "2026-10-01",
        time: "05:13",
        platforms: ["desktop"],
        summary:
            "The settings form above the chat box now matches the question panel, and its channel list opens in full instead of being cut off.",
    },
    {
        date: "2026-09-18",
        time: "00:01",
        platforms: ["desktop", "mobile"],
        summary:
            'The working status above the chat box now reads simply "Conjuring\u2026" or "Thinking\u2026", without repeating the name in front.',
    },
    {
        date: "2026-09-27",
        time: "23:27",
        platforms: ["desktop", "mobile"],
        summary:
            "Tools from an MCP server you connect are ready right away, so Conjure can use them without waiting for your next message.",
    },
    {
        date: "2026-09-27",
        time: "23:57",
        platforms: ["desktop", "mobile"],
        summary:
            "Tools you connect now say what each call is for in Conjure's activity, instead of repeating the tool's name down the list.",
    },
    {
        date: "2026-09-18",
        time: "00:02",
        platforms: ["desktop", "mobile"],
        summary: "What\u2019s new keeps its three newest lines and adds View all, which opens the whole history.",
    },
    {
        date: "2026-09-27",
        time: "20:17",
        platforms: ["desktop", "mobile"],
        summary:
            "When Conjure needs keys only you can add, their card pulses and says so, and reminds you that you can always just ask what to do.",
    },
    {
        date: "2026-09-02",
        time: "00:00",
        platforms: ["desktop", "mobile"],
        summary:
            "When a plan is redrawn, the new sketch keeps the look of the one before it, so your app still looks like itself.",
    },
    {
        date: "2026-09-23",
        time: "00:01",
        platforms: ["desktop", "mobile"],
        summary:
            'When something breaks behind the scenes, people using your app now see a plain "Something went wrong" message instead of internal error text.',
    },
    {
        date: "2026-09-27",
        time: "05:47",
        platforms: ["desktop", "mobile"],
        summary:
            "When the app keeps crashing after a request, Conjure notices and fixes it on its own, even while you are away.",
    },
    {
        date: "2026-09-27",
        time: "21:19",
        platforms: ["desktop", "mobile"],
        summary:
            "When your app is done, one Publish button makes it live and takes you to it; after that the button opens it, and says Update when your latest changes are not live yet.",
    },
    {
        date: "2026-09-22",
        time: "00:05",
        platforms: ["desktop"],
        summary:
            "When your app needs a setting before it can carry on, the form now appears right in the chat, so you fill it in without opening a dialog.",
    },
    {
        date: "2026-09-26",
        time: "01:46",
        platforms: ["desktop", "mobile"],
        summary:
            "While Conjure is testing your app, a blue bar across the top of your Frame says so and lets you stop it, a cursor shows every move and click it makes, and the chat keeps a line saying how long the test took.",
    },
    {
        date: "2026-09-24",
        time: "00:02",
        platforms: ["desktop", "mobile"],
        summary:
            "While Conjure is using your Frame, it now says why your clicks are paused and offers to open your published app, which stays yours to play.",
    },
    {
        date: "2026-10-01",
        time: "04:39",
        platforms: ["desktop", "mobile"],
        summary:
            "While Conjure tests your app, its bar now sits above the Frame instead of over it, so your app\u2019s header stays in view. On phones and narrow windows the bar stays on one line, with Stop on the right.",
    },
    {
        date: "2026-09-16",
        time: "00:01",
        platforms: ["mobile"],
        summary: "While Conjure works on your phone, a side quest may be offered when a video quest is available.",
    },
    {
        date: "2026-09-29",
        time: "20:42",
        platforms: ["desktop", "mobile"],
        summary: "While you have a project open, your status shows Conjuring so friends can see what you are up to.",
    },
    {
        date: "2026-09-12",
        time: "00:01",
        platforms: ["desktop", "mobile"],
        summary:
            "While you preview an app, every notification it sends arrives as a DM to you, naming anyone it concerns, so nothing you test posts to a channel or messages anyone else.",
    },
    {
        date: "2026-08-31",
        time: "00:02",
        platforms: ["desktop"],
        summary:
            "With Discord\u2019s Developer Mode on, a debug pane beside the builder shows your app\u2019s live logs and what your project is spending.",
    },
    {
        date: "2026-09-15",
        time: "00:01",
        platforms: ["mobile"],
        summary:
            "With Discord\u2019s Developer Mode on, a project\u2019s menu on phones has a Debug entry: your app\u2019s runtime logs, its resource use, and the agent\u2019s spend and limits.",
    },
    {
        date: "2026-08-26",
        time: "00:01",
        platforms: ["desktop", "mobile"],
        summary:
            "You can move back and forth through Conjure\u2019s questions instead of being held on the one in front of you.",
    },
    {
        date: "2026-09-07",
        time: "00:00",
        platforms: ["desktop"],
        summary:
            "You can now point at your app instead of describing it. Turn on comment mode, click anything on screen to leave a note on that exact piece, and every note you leave stays marked where you left it. Reopen any of them to change your wording or take it back, then send the whole set at once with a note for all of it. Once sent, the set reads back as a tidy summary of what you asked for rather than a page of technical detail.",
    },
    {
        date: "2026-09-05",
        time: "00:01",
        platforms: ["desktop", "mobile"],
        summary:
            "Your app now has its own web address: pages people can open in a browser, a second address showing the version you are still working on, and a Sign in with Discord button that never asks anyone for a password.",
    },
    {
        date: "2026-09-27",
        time: "20:05",
        platforms: ["desktop", "mobile"],
        summary:
            "Your app's icon, name and description now travel with the project: an export includes them, and importing that export brings them back.",
    },
    {
        date: "2026-09-27",
        time: "06:27",
        platforms: ["desktop", "mobile"],
        summary: "Your frame stays on screen while a new build deploys, and only blinks once to load it.",
    },
    {
        date: "2026-08-31",
        time: "00:01",
        platforms: ["desktop", "mobile"],
        summary:
            "Your project gets a real name as soon as Conjure lands on a plan, instead of sitting as Untitled App.",
    },
    {
        date: "2026-09-03",
        time: "00:00",
        platforms: ["desktop", "mobile"],
        summary:
            "Your published app stays playable while Conjure drives the preview, instead of both freezing at once.",
    },
].sort(function (e, t) {
    return e.date !== t.date
        ? e.date < t.date
            ? 1
            : -1
        : e.time !== t.time
          ? e.time < t.time
              ? 1
              : -1
          : e.summary < t.summary
            ? -1
            : +(e.summary > t.summary);
});
function s(e) {
    return i(e).slice(0, 3);
}
function i(e) {
    return n.filter((t) => t.platforms.includes(e));
}
function o(e) {
    return i(e).length > 3;
}
function l(e) {
    return 1 === e.platforms.length;
}
